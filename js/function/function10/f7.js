/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */


function filter(){
    let array = [2, 8, 11, 4, 9, 3];
    return array.filter(function(n){ return n%2 !== 0; });
}

//console.log([2, 8, 11, 4, 9, 3].filter(function(n){ return n%2 !== 0; }));
console.log(filter());



















// let arr = [2, 8, 11, 4, 9, 3];

// (
// function (array) {
//     let newArr = [];
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 != 0){
//             newArr[newArr.length] = arr[i];
//         }
//     }
    
//     console.log(newArr);

// }
// )(arr);