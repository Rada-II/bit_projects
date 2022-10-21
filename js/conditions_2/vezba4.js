//zadatak 3.
var x = 0;
var y = -1;
var z = 4;
var result = "";
if (x > y && x > z) {
    if (y > z) {
        result = (x + ", " + y + ", " + z);
    }
    else {
        result = (x + ", " + z + ", " + y);
    }
}
else if (y > x && y > z) {
    if (x > z) {
        result = (y + ", " + x + ", " + z);
    }
    else {
        result = (y + ", " + z + ", " + x);
    }
}
else if (z > x && z > y) {
    if (x > y) {
        result = (z + ", " + x + ", " + y);
    }
    else {
        result = (z + ", " + y + ", " + x);
    }
}  

console.log(result);