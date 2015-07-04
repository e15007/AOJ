# AOJにおけるのデータの取り出し方(JavaScript)

## 外部入力のとり方

### `fs.readFileSync()`を使う方法

こちらがシンプルかつ高速なのでおすすめ

```javascript
var stdin = require('fs').readFileSync('/dev/stdin', 'utf8');
```

### `process.stdin` を 使う方法

paizaの標準テンプレート

```javascript
process.stdin.on('data', function(chunk) {
  var inputs = chunk.toString();
  // ここに処理を書く
});
process.stdin.resume();
process.stdin.setEncoding('utf8');
```

完全にデータを受け取ってから,処理を開始したい場合

```javascript
var data = '';
process.stdin.on('end', function() {
  var inputs = data.toString();
  // ここに処理を書く
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  data += chunk;
});
```

プログラムの実行は ```$nodejs filename.js < datafile``` で行う

## テンプレート

> 即値実行関数を使ってデータを渡す

```javascript
'use strict';
(function(stdin) {
  var inputs  = stdin.toString();
  var result = (function(data) {
    // ここに処理を書いて結果を戻す
    console.log(data);
    return;
  }(inputs));
  console.log(result); // 結果の表示
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

> 1行だけのデータを取得する場合

```javascript
'use strict';
(function(stdin) { 
  var inputs  = stdin.toString();
  var result = (function(data) {
    console.log(data);
    return;
// 改行毎の配列に変換して最初の行を取得
  }(inputs.split('\n')[0])); 
  console.log(result); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

> 1行に2つの数値データを取得する場合

```javascript
'use strict';
(function(stdin) { 
  var inputs  = stdin.toString()
    .split('\n')[0]
    .split(' ').map(Number); 
  var result = (function(a,b) {
    console.log(a,b);
    return;
  }(inputs[0],inputs[1])); 
  console.log(result); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

> 1行に複数の数値データを取得する場合(配列で返す)

```javascript
'use strict';
(function(stdin) { 
  var inputs  = stdin.toString()
    .split('\n')[0]
    .split(' ').map(Number); 
  var result = (function(data) {
    console.log(data);
    return ;
  }(inputs)); 
  console.log(result); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

> 1行目にデータの数が指定されている場合

```javascript
'use strict';
(function(stdin) {
// Array.shift(),Array.slice() を使用するためArrayに変換
  var inputs  = stdin.toString().split('\n');
  var result = (function(data) {
    console.log(data);
    return ;
// Array.shift()で1行目(m)を抜き出し
// Array.slice(n,m)でm行目まで取得
  }(inputs.slice(0,inputs.shift()))); 
  console.log(result); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

> 終了文字列が指定されている場合(String.split()を使う方法)

```javascript
'use strict';
(function(stdin) {
  // 終了文字列の指定(^指定文字列)
  var EOF = '\n' + '指定文字列';
  var inputs  = stdin.toString();
  var result = (function(data) {
    console.log(data)
    return ;
// 終了文字列で分割し終了文字列の直前までを取得
  }(inputs.split(EOF,1)
  )); 
  console.log(result); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

> 終了文字列が指定されている場合(Array.indexOf()を使う方法)

```javascript
'use strict';
(function(stdin) {
  // 終了文字列の指定
  var EOF = '指定文字列';
  // Array.indexOf() を使用するためArrayに変換
  var inputs  = stdin.toString().split('\n');
  var result = (function(data) {
    console.log(data);
    return ;
// Array.indexOfを使用して指定文字のindexを取得しArray.slice(n,m)で切り出し
  }(inputs.slice(0,inputs.indexOf(EOF))
  )); 
  console.log(result); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```
