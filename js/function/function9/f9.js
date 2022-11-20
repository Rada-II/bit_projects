/*9.Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise. 
Arrays do not have to be sorted (see example #2). Arrays should concatenate to create the final array exactly (examples #3 and #4).
Examples: canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array. */




function testConcatenationArrays (arrays,arrays2){
    var arrays1 = [].concat.apply([], arrays);

    //console.log(arrays1);
    if (arrays1. length !== arrays2. length) return false;
    for (var i = 0, len = arrays1. length; i < len; i++){
    if (arrays1[i] !== arrays2[i]){
    return false;
    }
    }
    return true;
}
console.log(testConcatenationArrays ([[1, 2, 3, 4], [5, 6], [7]],[1, 2, 3, 4, 5, 6, 7]));
console.log(testConcatenationArrays ([[2, 1, 3], [5, 4, 7, 6]],[7, 6, 5, 4, 3, 2, 1]));
console.log(testConcatenationArrays ([[2, 1, 3], [5, 4, 7, 6, 7]],[1, 2, 3, 4, 5, 6, 7]));
console.log(testConcatenationArrays ([[2, 1, 3], [5, 4, 7]],[1, 2, 3, 4, 5, 6, 7]));



// function compareArrays(arr, arr2) {

//     let arr1 = [].concat.apply([], arr);
   
//     if(arr1.length != arr2.length) {
//         return false;
//     } 
//     else { 
//         let result = false;
        
        
//         for(let i=0; i<arr1.length; i++) {

//             if(arr1[i] != arr2[i]) {
//                 return false;
//             }
//             else {
//                 result = true;
//             }

//         }
//         return result;
        
//   }

// }
// console.log(compareArrays ([[1, 2, 3, 4], [5, 6], [7]],[1, 2, 3, 4, 5, 6, 7]));
// console.log(compareArrays ([[2, 1, 3], [5, 4, 7, 6]],[7, 6, 5, 4, 3, 2, 1]));
// console.log(compareArrays ([[2, 1, 3], [5, 4, 7, 6, 7]],[1, 2, 3, 4, 5, 6, 7]));
// console.log(compareArrays ([[2, 1, 3], [5, 4, 7]],[1, 2, 3, 4, 5, 6, 7]));








// const arr = [[1, 2, 3, 4], [5, 6], [7]];
// const newArr = arr.flat();
// console.log(newArr);











// let arr1 = [5, 4, 7, 6, 7],
//     arr2 = [5, 4, 7, 6, 7];
      

// let result1 = [...arr1, ...arr2];
// //console.log(result1);






















// var arr = [ [[1, 2, 3, 4], [5, 6], [7]] ];
// var new_arr = [];

// for(var i = 0; i < arr.length; i++){
//     new_arr = new_arr.concat(arr[i]);
// }


// console.log(new_arr.push(i));

// let newArray = [].concat.apply([[[1, 2, 3, 4], [5, 6], [7]]])
// console.log(newArray.push(newArray));
// //[[1, 2, 3, 4], [5, 6], [7]]



// function concatenate(array1, array2) {
//     for (i = 0; i < array2.length; i++) {
//       array1[array1.length] = array2[i];
//     }
//     return array1;
//   }
//   var array1 = [4, 5, 6, 2];
//   var array2 = [3, 8, 11, 9];
//   var func = concatenate(array1, array2);
//   console.log(func);