'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  (function(array) {
  array.sort(function (a,b){
   	return a-b;
   	 console.log(array.join(' '));

   }) //ここに処理を書く

  }(inputs.split('\n')[0].split(' ').map(Number))); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));