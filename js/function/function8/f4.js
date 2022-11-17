/*4. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements. */

//  var array = [0, 15, false, -22, '', undefined, 47, "2323", null, 75, 63 , 101];
//  var validNumbers = array.filter(Number);
//  console.log(validNumbers); 
// var validNumbers = [15, -22, 47, 75, 63, 101, "2322"];
//  /var toNumbers = validNumbers.map(Number);










// var array = [0, 15, false, -22, '', undefined, 47, "2323", null, 75, 63 , 101];

// //// the best way to filter only numbers from array
// function isNumber(x) { return typeof x === 'number'; }  
// var validNumbers = array.filter(isNumber);

//  console.log(validNumbers);
// the best way to filter only numbers from array

function onlyNumbers(array){
  result = [];
  //y = 0;
   for(i=0;i<array.length;i++)
      if (typeof(array[i]) === 'number' && !isNaN(array[i])) { 

           result.push(array[i]);
          //result += array[i];
       //result[y] = array[i];
       //y++                                  
      }
      return result;
    }
    
    console.log(onlyNumbers([NaN,0, 15, false, -22, '', undefined, 47, "2323", null, 75, 63 , 101])); 
    var validNumbers = onlyNumbers([NaN,0, 15, false, -22, '', undefined, 47, "2323", null, 75, 63 , 101]);
function maxEl(array, max) {
        var result = "";
        var max = array[0];
        //var index = 0;
        for (i = 0; i < array.length; i++) {
          if (array[i] > max) {
            //index = i;
            max = array[i];
          }
        }
        return `Maximum number is ${max}`    //"Maximum number is " + max 
     
      }
      //var array = [NaN, 0, 15, false, -22, '', undefined, 47, null, 75, 63 , 101];
        var func = maxEl(validNumbers);
      console.log(func);



















































// function maxElement(array) {
//   var string = "";
//   var filteredNumbers = [];
//   var max = -Infinity;
//   var counter = 0;
//   for(var i = 0; i < array.length; i++) {

//     var num = parseFloat(array[i]);
//     if(isFinite(num)){
//       filteredNumbers[filteredNumbers.length] = num;
//       if(filteredNumbers[counter] > max){
//         max = filteredNumbers[counter];
//       }
//       counter++;
//     }
      
//   }
//   string += "Filter with only numbers is: " + filteredNumbers + "\n";
//   string += "Maximum number from filter is " + max;


//   return string;
// }

// var func = maxElement(array);
// console.log(func);
















































// 