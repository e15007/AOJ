'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  var params = inputs.split('\n')[0].split(' ').map(Number);
  (function(a,b,c) {
    var max= Math.max(a,b)//ここに処理を書く
    var min= Math.min(a,b)
    if (c>max){
        console.log(min,max,c);
    }else if (c<min){
        console.log(c,min,max);
    }else if(min<c&&c<max){
        console.log(min,c,max);
    }

    //ここに処理を書く

  }(params[0],params[1],params[2])); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));