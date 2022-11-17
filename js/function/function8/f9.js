/*9. Write a function to find all the numbers greater than the average.*/

function greaterThanAverage(arr) {
    var sum = 0;
    var avg;
    var result = [];

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    avg = sum / arr.length;
    
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > avg){
            result[result.length] = arr[j]; 
            result.push= arr[i]
        }
    }

    return result;  
}

var array = [1, 2, 3];
//console.log(greaterThanAverage(array));







console.log(array[3]); 
console.log(array[array.length]); 
console.log(array.length); 














