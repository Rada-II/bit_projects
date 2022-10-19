//zadatak 1
var a = 3;
var b = 5;
var c = 3;
var result = "";

if (a == b && a == c && b == c){
    result = "Triangle is equilateral";
} else if (a == b || a == c || b ==c){
    result = "Triangle is scalene";
} else {
    result ="Triangle is isosceles";
}

console.log(result);