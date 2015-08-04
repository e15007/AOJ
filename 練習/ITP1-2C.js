'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  var params = inputs.split('\n')[0].split(' ').map(Number);
  (function(a,b,c){
    var result = params.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    console.log(params.join(' '));
  }(params[0],params[1],params[2])); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));


// sortメソッドの引数に関数名を指定すると、配列の各要素の値を2つ取り出
// して関数に引数として渡し、関数が返す値に応じて並べ替えを行ってくれます。





'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  (function(array) {
    console.log(array.sort(function(a,b){
        return a - b;
    }).join(' '));
  }(inputs.split('\n')[0].split(' ').map(Number))); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));

