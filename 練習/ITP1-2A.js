'use strict';
(function(stdin) { 
  var inputs = stdin.toString();
  var params = inputs.split('\n')[0].split(' ').map(Number);
  (function(W,H,x,y,r) {
    if(x+r<=W && y+r<=H && y-r>=0&&x-r>=0){
        console.log('Yes');
    }else{
        console.log('No');
    }
    //ここに処理を書く
    var a = (W>=x+r);
console.log(a);

  }(params[0],params[1],params[2],params[3],params[4])); 
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
// (function(a,b){
//   if (a<b){
//       console.log('a<b');
//   } else if(a>b){
//       console.log('a>b');
//   } else{
//       console.log('a==b');   5 4 2 2 1
//   } 
// })(params[0],params[1]);


// var a = params[0];
// var b = params[1];
// var c = params[2];
// console.log(a,b);



//ここに処理を書く
