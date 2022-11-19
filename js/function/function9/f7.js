function diamondsArray(input){
let diamondArray = [];

for (i=1; i <= input * 2-i; i++)
if (i<input)
for(j=0; j < 2 * input-1; j++)
else
for (j=0; j < 2 * input-i; i++)



return diamondArray;
}
console.log(diamondsArray(5));