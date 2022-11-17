/* 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti). */


function median(array) {

    array.sort( function(a,b) {return a - b;} ); 
    var half = Math.floor(array.length/2);
    let rest = array.length % 2;  
    if(rest)
        return array[half];
    else
        return (array[half-1] + array[half]) / 2.0;
}

var array = [1,2,3,4,5]
var func = median(array);
console.log(median(array));









// if(0){
//     console.log(5>2);
// }
// console.log(5%2);
// console.log( Math.floor(3));




















































































//  var array = [1,2,3,4,];
// var result= array.length / 2 - 0.5

// console.log(result);

// var half = Math.floor(array.length/2);
// console.log(half);







// function ArrMedian(arr) {
//     var result = "";

//     if(arr.length % 2 !== 0){
//         result = arr[arr.length / 2 - 0.5];
//     }
//     else{
//         result = arr[arr.length / 2 ];
//     }

//     return result;
    
// }

// var a = [1,2,3,4];
// console.log(ArrMedian(a));



































// function median(array) {
//   var result = "";
//     for (var i = 1; i < array.length; i++) {
//       for (var j = 0; j < i; j++) {
//         if (array.length % 2 === 0) {
//             if (i > j) {
//               result = array[j] + 0.5;
//               break;
//             }
//           }
//         }
//           if (array.length % 2 !== 0) {
//             if (i === j) {
//               result = array[i];
              
//             }
//           }
//         }
      
//         return result;
//       }
        
      
     
  
 
//   var array = [ 13, 11, 15, 5, 6, 1, 8];
//   var func = median(array);
//   console.log(func);