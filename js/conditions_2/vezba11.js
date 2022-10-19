//zadatak 10.
let a = 256;
let result = "";
if (a < 20) {
    result = "-";
  } else if (a >= 20 && a <= 100) {
    result = "20 <=> 100";
  } else if (a >= 100 && a <= 400)
    {result = "100 <=> 400";}
 else {
  result = "a is not within the range"
}


console.log(result);
