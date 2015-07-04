```js
// 単純な分岐
'use strict';
var func = {
  // if文を 使って分岐
  f1:function(rain) {
    if (rain) {
      return '雨';
    } else {
      return '晴れ';
    }
  }
  // 3項演算を使って分岐
  ,f2:function(rain) {
    return rain ? '雨' : '晴れ';
  }
  // オブジェクトのプロパティを使って分岐
  ,f3:function(rain) {
    return {true:'雨',false:'晴れ'}[rain];
  }
  // 配列とboolen -> number 変換を使って分岐
  ,f4:function(rain) {
    return ['雨','晴れ'][Number(!rain)];
  }
};

// 単純にcallする
console.log(func.f1(false));
console.log(func.f2(false));
console.log(func.f3(false));
console.log(func.f4(false));

// for in 文で 回す
for (var f in func) {
  console.log(func[f](false));
}

// Key(f1,f2,f3,f4)を配列にしてforEachで回す
Object.keys(func).forEach(function(f) {
  console.log(func[f](false));
});
```