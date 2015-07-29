'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  var params = inputs.split('\n')[0].split(' ').map(Number);
  (function(a,b,c) {

    if(a<b && b<c){
        console.log('Yes');
    }else {
        console.log('No');
    }
    //ここに処理を書く
}(params[0],params[1],params[2])); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));