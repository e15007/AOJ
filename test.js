var cols = '123456789';
var rows = '123456789';

var c = cols.split('').map(Number);
var r = rows.split('').map(Number);

var array = [];
r.forEach(function(r) {
    c.forEach(function(c) {
        array.push(r * c);
    })
})
console.log(array.join(' '));

for ( var i = 1; i <=9 ; i++){
document.write('<th>' + i + '</th>');
for ( var j = 1; j <=9 ; j++){
document.write('<td>' + i * j + '</td>');
}
document.write('</tr>');
}
