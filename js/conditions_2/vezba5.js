var checkNumber = 7;
var result = "";

if (typeof checkNumber === 'number') {

  if (checkNumber % 2 == 0) {
    result = (checkNumber / 2)
  }
  else result = ("x")
}

console.log(result);

