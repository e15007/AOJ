# [3. Repetitive Processing ](http://judge.u-aizu.ac.jp/onlinejudge/topic.jsp?cid=ITP1#problems/ITP1_3)

## [A. Print Many Hello World ](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ITP1_3_A)

- 問題:1000 個の "Hello World" を出力するプログラムを作成して下さい。
- 入力:なし
- 解法:1000回 print する
- **解法:Loop(for or while)文 を使う**
- [solution](http://judge.u-aizu.ac.jp/onlinejudge/solution.jsp?pid=ITP1_3_A#10)


## [B. Print Test Cases ](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ITP1_3_B)

- 問題:データ x ごとに,Case i: x のように出力して下さい：
- 入力:xが0のとき入力の終わりを示す複数行からなるデータセット
- 解法:Loop(for,while)文 を使う
- 解法:配列のMap,forEachを使う
- [solution](http://judge.u-aizu.ac.jp/onlinejudge/solution.jsp?pid=ITP1_3_B#10)

```js
// Array.forEach() を 使ったパターン
'use strict';
(function(stdin) {
  var EOF = '0';
  var inputs  = stdin.toString().split('\n');
  (function(array) {
    array.forEach(function(x,index) {
      console.log('Case', index + ':', x);
    });
  }(inputs.slice(0,inputs.indexOf(EOF))
  )); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

## [C. Swapping Two Numbers ](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ITP1_3_C)

- 問題:2つの整数 x, y を読み込み、それらを値が小さい順に出力
- 入力:各データセットは空白で区切られた2つの整数 x, y を含む1行から構成
- 解法:Loop(for,while)文 もしくは配列のMap,forEachを使う
- 解法:大小の比較は if文,Math.max() Math.min(),もしくはarray.sort()を使う
- [solution](http://judge.u-aizu.ac.jp/onlinejudge/solution.jsp?pid=ITP1_3_C#10)

```js
// Arrays.sortを使って並べ替え
'use strict';
(function(stdin) {
  var EOF = '0 0';
  var inputs  = stdin.toString().split('\n');
  (function(data_array) {
    data_array.map(function(v) {
      return v.split(' ') 
        .map(Number)
        .sort(function(a,b) {
          return a - b;
        });
    }).forEach(function(v) {
      console.log(v[0],v[1]);
    });
  }(inputs.slice(0,inputs.indexOf(EOF))
  )); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

```js
// Math.max Math.min を使ったパターン
'use strict';
(function(stdin) {
  var EOF = '0 0';
  var inputs  = stdin.toString().split('\n');
  (function(data_array) {
    data_array.map(function(v) {
      var split_data = v.split(' ').map(Number);
      return [
        Math.min(split_data[0],split_data[1])
        ,Math.max(split_data[0],split_data[1])
      ];
    }).forEach(function(v) {
      console.log(v[0],v[1]);
    });
  }(inputs.slice(0,inputs.indexOf(EOF))
  )); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```


## [D. How Many Divisors? ](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ITP1_3_D)

- 問題:3つの整数 a,b,c を読み込み、a から b までの整数の中に、c の約数がいくつあるかを求める
- 入力:a,b,c が1つの空白区切りで1行
- 解法:約数の判定は ( c % x === 0) を使う
- [solution](http://judge.u-aizu.ac.jp/onlinejudge/solution.jsp?pid=ITP1_3_D#10)

```js
'use strict';
(function(stdin) {
  var lines  = stdin.toString().split('\n');
  var param = lines[0].split(' ').map(Number);
  (function(data_array,c) {
    var count = data_array
      .filter(function diviser(v) {
        return c % v === 0;
      }).length;
    console.log(count);
  }(new Range(param[0],param[1]),param[2]
  ));

  function Range(startIndex,endIndex) {
    var array = [];
    for (var i = startIndex; i <= endIndex; i++) {
      array.push(i);
    }
    return array;
  }
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
```

