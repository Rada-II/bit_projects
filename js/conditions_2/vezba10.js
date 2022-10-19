//zadatak 9.//
function test50(x, y) {
    if ((x == 50 || y == 50) || (x + y == 50)) {
        return ('true')
    }
    else {
        return ('-');
    }
}

console.log(test50(5, 54));
console.log(test50(6, 50));
console.log(test50(40, 10));