var day = 1;
var result = "";

switch (day) {
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Tusday";
    break;
  case 3:
    result = "Wendsday";
    break;
  case 4:
    result = "Thursday";
    break;
  case 5:
    result = "Friday";
    break;
  case 6:
    result = "Saturday";
    break;
  case 7:
    result = "Sunday";
    break;
    default:
    result = "Input must be a number between 1 and 7"
    break;
}

console.log(result);