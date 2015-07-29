

'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  var params = inputs.split('\n')[0].split(' ').map(Number);
  (function(a,b) {
    if(a>b){
            console.log('a > b');
    }else if(a<b) {
        console.log('a < b');
    }else{
        console.log('a == b');
    }
    //ここに処理を書く

  }(params[0],params[1])); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
