/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]*/

function createArray(num, elem) {
    array = [];
    if (elem === undefined) {
        elem = null;
      }
    for (i = 0; i < num; i++) {
        array.push(elem);
    }
    return array;
}
var func = createArray(2);
console.log(func);
var func = createArray(6,0);
console.log(func);
var func = createArray(2,"none");
console.log(func);