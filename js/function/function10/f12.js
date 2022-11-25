/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/



function removeEveryOther(arr){
    return arr.filter((a,i) => i%2 == 0);
}          //"normal 'named' function"

console.log(removeEveryOther([3, 5, 1, 8, 90, -4, 23, 1, 67]));


// function removeEveryOther(arr){
//     let newArr = [];

//      for (let i=0; i < arr.length; i+=2){
//         newArr.push(arr[i])     
//      } 
//     return newArr
// }

// console.log(removeEveryOther([3, 5, 1, 8, 90, -4, 23, 1, 67]));


(function(array){
    console.log(array.filter((a,i) => i%2 == 0));
})([3, 5, 1, 8, 90, -4, 23, 1, 67]);      //self-invoking anonymous function 



 let removeEverySecond = function (arr){
    let newArr = [];

     for (let i=0; i < arr.length; i+=2){
        newArr.push(arr[i])     
     } 
    return newArr
}   // "normal" anonymous function 

console.log(removeEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));

