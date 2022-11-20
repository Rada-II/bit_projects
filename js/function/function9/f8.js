/*8.Create a function that returns the sum of missing numbers.
Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575*/

const sumMissingNumbers = (arr) => {
    let a = (arr.sort(function(a, b){return (a - b);}));
    let b = [];
    let c = 0;
    let d = 0;
    for (let i = 0; i < a.length; i++) {
      b.push(parseInt(a[i]));
    }
    
    for(let i = 0; i < b.length - 1; i++) {
      if (b[i] !== (b[i + 1] - 1)) {
        c = b[i + 1] - b[i] - 1;
        for(let j = 0; j < c; j++){
                   d += b[i] + j + 1;
          
        }
      }
    }
    return d;
  }
  
  
  
  
  
  console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
  console.log(sumMissingNumbers([10, 7, 5, 3, 1]));
  console.log(sumMissingNumbers([1, 3, 5, 7, 10]));



