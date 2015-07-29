'use strict';
(function(stdin) {
    var inputs = stdin.toString();
    var params = inputs.split('\n')[0].split(' ').map(Number);
    (function(a, b, c) {
        var result = params.sort(function(a, b) {
            if (a < b) return -1;
            if (a > b) return 1;

            return 0;

        })
        console.log(result.join(' '));


        //ここに処理を書く

    }(params[0], params[1], params[2]));
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
