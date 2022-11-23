/*7. Create a function that returns an array that expands by 1 from 1 to the value of the input,
 and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

Examples:
diamondArrays(1) ➞ [1],
diamondArrays(2) ➞ [1, 2, 2, 1]
diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1] */



// function diamondsArray(input){
//     let diamondArray = [];
//     let diamondArrays=[];

    
//    for (i=1; i<=input*2-1; i++)
//    {
//       diamondArray = [];
//     if (i<=input)
//      for(j=0; j<i; j++)
//       diamondArray.push(i);
//     else
//      for (j=0; j <2*input-i; j++)
//       diamondArray.push(2 * input-i)
//       diamondArrays.push(diamondArray);
//       //console.log(diamondArrays[i]);
//    }
   
//    return diamondArrays;
//    }
//    let result = diamondsArray(5);
//    for(j=0; j < result.length;j++)
//    console.log(result[j]);
//    console.log(JSON.stringify(diamondsArray(5)));
   
   //console.log(diamondsArray(2));
   //console.log(diamondsArray(1));















function diamondsArray(input){
   let diamondArray = [];
   
   for (i=1; i<=input*2-1; i++)
   if (i<=input)
   for(j=0; j<i; j++)
   diamondArray.push(i);
    else
    for (j=0; j <2*input-i; j++)
    diamondArray.push(2 * input-i);
    
    
    return diamondArray;
  }
  console.log(diamondsArray(5));
  console.log(diamondsArray(2));
  console.log(diamondsArray(1));



















// // // [ [1], [2,2], [3,3,3], [2,2], [1] ]
// function diamondsArray(input){
//    let diamondArray = [];
//    let diamondArrays=[];
   
//   for (i=1; i<=input*2-1; i++){
//    diamondArray = [];
//    if (i<=input)
//     for(j=0; j<i; j++)
//      diamondArray.push(i);
//    else
//     for (j=0; j <2*input-i; j++)
//      diamondArray.push(2 * input-i);
//      diamondArrays.push(diamondArray);
  
//   }
//   return diamondArrays;
//   }
//   console.log(JSON.stringify(diamondsArray(5)));


  
  //   console.log(diamondsArray(1));
  //   console.log(diamondsArray(2));
  //   console.log(diamondsArray(5));





  
  
  
  
  
  












  
//   function compare(arr) {
//    var bigArray = [];
//    var smallArr = [];
//    var y;
//    for (let i = 0; i < arr.length; i++) {
//      if (i === arr.length - 1 && arr[i] === y) {
//        smallArr.push(arr[i])
//        bigArray.push(smallArr)
//      } else if (i === arr.length - 1 && arr[i] !== y) {
//        bigArray.push(smallArr)
//        smallArr = [];
//        smallArr.push(arr[i])
//      }
//      if (i === 0) {
//        smallArr.push(arr[i])
//        y = arr[i]
//      } else {
//        if (arr[i] === y) {
//          smallArr.push(arr[i])
//          y = arr[i]
//        } else {
//          bigArray.push(smallArr)
//          smallArr = [];
//          smallArr.push(arr[i])
//          y = arr[i]
//        }
//      }
//    }
//    return JSON.stringify(bigArray);
//  }

// console.log(compare([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]));














//   function compare(arr) {
//    var bigArray = [];
//    var smallArr = [];
//    var y;
//    for (let i = 0; i < arr.length; i++) {
//      if (i = 0) {
//        smallArr.push[arr[i]]
//        y = arr[i]
//      } else {
//        if (arr[i] === y) {
//          smallArr.push[arr[i]]
//          y = arr[i]
//        } else {
//          bigArray.push(smallArr)
//          smallArr = [];
//          smallArr.push[arr[i]]
//          y = arr[i]
//        }
//      }
//    }
//    return bigArray;
 
//   }

// function compare(arr) {
//    var bigArray = [];
//    var smallArr = [];
//    var y;
//    for (let i = 0; i < arr.length; i++) {
//       if (i === 0) {
//          smallArr.push(arr[i])
//          y = arr[i]
//       } else {
//          if (arr[i] === y) {
//             smallArr.push(arr[i])
//             y = arr[i]
//          } else {
//             bigArray.push(smallArr)
//             smallArr = [];
//             smallArr.push(arr[i])
//             y = arr[i]
//          }
//       }
//    }
//    return JSON.stringify(bigArray);
// }
// console.log(compare([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]));











































































// function printDiamondArrays(num) {
//    var result = [];

//    for (var i = 1; i <= num; i++) {
//      for (var j = 0; j < i; j++) {
//        result.push(i);
//      }
//    }

//    for (var k = num - 1; k > 0; k--) {
//      for (var l = 0; l < k; l++) {
//        result.push(k);
//      }
//    }

//    return result;
//  }

//  console.log(printDiamondArrays(5));
















// function diamondsArray(input){
//  let diamondArray = [];

// for (let i=1; i <= input * 2-i; i++)
//     if (i<input)
// for(let j=0; j < 2 * input-1; j++)
//     else
// for (let j=0; j <= 2 * input-i; i++)



// return diamondArray;
// }
// console.log(diamondsArray(5));