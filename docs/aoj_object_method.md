# [JavaScript Global Objects & Object Methods](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects)

## [String 文字列オブジェクト](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)

### [length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)

文字列の文字数を表します。

```js
'abc'.length; // => 3
```
### [String.split()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split)

文字列を複数の部分文字列に区切ることにより、String オブジェクトを文字列の配列に分割します。

> `var splits = str.split([separator][,limit]);`

```js
'abc'.split();            // => ['abc']
'abc'.split('');          // => ['a','b','c']
'abc'.split('',2);        // => ['a','b']
'Hello World'.split(' '); // => ['Hello','World']
'1\n2\n3\n'.split('\n');  // => ['1','2','3']
'1\n2\nEOL\n'.split('\nEOL',1);// => ['1\n2'] (区切り文字の前まで取得)
'121123123'.split('1').length -1; // => 4 (1の出現回数)
```

### [String.prototype.trim()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

文字列の両端の空白を削除します。

> `string.trim()`

```js
' Hello  '.trim(); // => 'Hello'
'Hello\n'.trim();  // => 'Hello'
```

### [String.slice()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

文字列の一部分を取り出し、新しい文字列を返します。

> `var sub = string.slice(beginslice[,endSlice]);`

```js
'Hello World'.slice(6); // => 'World'
'Hello World'.slice(0,5); // => 'Hello'
```

### [String.replace()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

正規表現と文字列との間のマッチを見つけ、マッチした部分文字列を新しい部分文字列に置き換えます。

`newString = str.replace(regexp|substr, newSubStr|function[, flags]);`

```js
'Hello World'.replace('o','0'); // => 'Hell0 World' 
'Hello World'.replace(/o/,'0'); // => 'Hell0 World' 
'Hello World'.replace(/o/g,'0'); // => 'Hell0 W0rld' 
'<tag>'.replace(/[<>]/g,function(c) {
  return '\\' + c;
}); // => '\\<tag\\>'
```

## [Array 配列オブジェクト]([https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

### [Array.join()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)



## [Math 数学オブジェクト](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math)

### [Math.PI](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)

円周率。約 3.14159 です。

> `Math.PI`

### [Math.max()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 

引数として与えた複数の数の中で最大の数を返します。

> `Math.max([value1[,value2[, ...]]])`

```js
Math.max(1,5,3); // => 5
Math.max.apply(null,[1,5,3]); // => 5
```

### [Math.min()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

引数として与えた複数の数の中で最小の数を返します。

> `Math.min([value1[,value2[, ...]]])`

```js
Math.min(1,5,3); // => 1
Math.min.apply(null,[1,5,3]); // => 1
```

### [Math.pow()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

base を exponent 乗した値を返します。

> `Math.pow(base,exponent)` 

```js
Math.pow(2,3); // => 8
```

### [Math.sqrt()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

引数として与えた数の平方根を返します。

> `Math.sqrt(x)` 

```js
Math.sqrt(4); // => 2
Math.sqrt(2); // => 1.4142135623730951
Math.sqrt(Math.pow(x2 - x1 ,2) + Math.pow(y2 - y1 ,2)); // 2点間の距離
```

### [Math.floor()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

引数として与えた数以下の最大の整数を返します。

> `Math.floor(x)`

```js
Math.floor(1.23456); // => 1
Math.floor(Math.PI); // => 3
```

Math.floorと同等の処理をビット演算で行う(高速だと言われている)

```js
~~(1.23456);    // 排他的論理和を使う方法
(1.23456 | 0);  // 0との論理和を使う方法
(1.23456 >> 0); // シフト演算を使う方法 高速
```

### [Math.abs()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

引数として与えた数の絶対値を返します。

> `var abs = Math.abs(x);`

```js
Math.abs(-1); // => 1
Math.abs('-1'); // => 1
Math.abs(1); // => 1
```

## [RegExp 正規表現オブジェクト](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

パターンに従ったテキストにマッチする正規表現オブジェクトを生成します。

> `var regex = new RegExp("pattern" [, "flags"]);`  
> `var literal = /pattern/flags;`

### [RegExp.prototype.test()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

正規表現と対象の文字列の間のマッチを調べるための検索を実行し、結果を示す真偽値 ( true / false )を返します。

`var result = regexp.test(str);`

### [RegExp.prototype.exec()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

特定の文字列でのマッチのための検索を実行します。結果の配列、あるいは、null が返ります。

`var result = regexp.exec(str);`

## [Object](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)

### [Object.prototype.keys()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

与えられたオブジェクト自身に存在する列挙可能なプロパティの配列を返します

> `Object.keys(obj)`

```js
var o = {a:1,b:2};
Object.keys(o); // => [a,b]
Object.keys(o).length; // => 2
```



