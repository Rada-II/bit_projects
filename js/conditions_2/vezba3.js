//zadatak 2.//
var a = -5;
var b = -2;
var c = -6
var d = 0;
var f = -1;
var result = "";
if(a>b && a>c && a>d && a>f)
{
    result = a;
}
else if(b>a && b>c && b>d && b>f)
{
    result = b;
}
else if (c>a && c>b && c>d && c>f)
{
    result = c;
}
else if (d>a && d>c && d>b && d>f)
{
    result = d;
}
else
{
    result = f;
}

console.log(result);