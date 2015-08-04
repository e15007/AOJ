'use strict';
(function(stdin) {
  var inputs  = stdin.toString().trim().split('\n');
  var sorts = inputs
  .map(Number)          // 数値化
  .sort(function(a,b){  // 降順にならべかえ
    return b-a;
  })
  .slice(0,3)                //先頭から3つを選択
  .join('\n');                  //改行で合体




console.log(sorts);
  
}(require('fs').readFileSync('/dev/stdin', 'utf8')));


