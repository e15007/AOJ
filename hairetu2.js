'use strict';
(function(stdin) {
  var inputs  = stdin
  .toString() //文字型へ変換
  .trim()   //先頭と最後の空白文字を取り除く（改行を含む）
  .split('\n');  // 配列に分割
// console.log(inputs);                [ '5 7', '1 99', '1000 999' ]
for (var i = 0;i<inputs.length;i++){
    var cols = inputs[i].split(' ');
    console.log(cols[0].length+cols[1].length); //桁数を出す
}

//関数パラダイム






  

  
}(require('fs').readFileSync('/dev/stdin', 'utf8')));