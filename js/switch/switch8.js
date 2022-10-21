var a = 3;
var b = 0;
var c = "/";
var result = "";



if (b == 0 && c == "/") {
  result = "we don't devide numbers with 0";
  } else {
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
}

console.log(result);