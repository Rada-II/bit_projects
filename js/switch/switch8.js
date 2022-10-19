var a = 10;
var b = 5;
var c = "/";
var result = "";



if (b == 0) {
  switch (c) {
    case "+":
      result = a + b;
      break;
    case "*":
      result = a * b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    default:
     result = "eror";
  }
} else {
  result = "we don't devide numbers with 0";
}

console.log(result);