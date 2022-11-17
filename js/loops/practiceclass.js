/*var X = 50;
while (x < 100) {
    console.log ("X je manje od 100: " + x);
    x++;
}
console.log("Završena petlja");
while (x > 0){
    console.log ("x je veće od 0");
    x--;
}
console.log("Završeno");*/

/*v<ar x = 10;
do {
    console.log("Trenutna vrednost x je: " +x);
    x ++;
}
while (x < 10) {
    console.log ("X je manje od 10 i iznos : " +x);
    x++;
}
console.log("Završeno");*/

/*var index = 0;
for (var index = 0; index <= 10; index++) {
    console.log(index + " je trenutna vrednost");
}
console.log("Završeno");*/


/*ispisati prvih 20 br, od 15 do 18 sa slovom a
for ( var i = 0; i <=20; i++){
    if(i >= 15 && i <= 18) {
        console.log(i +"A");
    } 
    else {
    console.log(i);}
}*/

/*var x = [1, 2 , 10];
var y = [1, 3, 4];
for (var i = 0; i < x.length; i ++) {
    for (var k = 0; k < y.length; k++) {
        if (x[i]==y[k]) {
            console.log("Ovaj element je sadrzan u oba niza : " + x[i]);
        }
    }
}*/

/*var niz = ["A", "B", "C"];

for (var element in niz) {
    console.log(element);
    console.log(niz[element]);
    console.log(niz.lenght);
}*/
// var friends = ["Igor", "Darko", "Marina"];

// for (var i=0; i<friends.length; i++)
//   if(friends[i] == "Marina"){
//     console.log(" Marina : Ivan je also friend!");
//   }
//   else{
//     console.log("no more friends");
//   }
// function multiplyBy2(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         result.push(arr[i]*2)
//       //result[i] = arr[i] * 2;
//     }
//     console.log(
//       result.sort( (a, b) =>a-b
//       )
//     );
//   }
//   multiplyBy2([13, 11, 15, 5, 6, 1, 8, 12]);

//var array = [];
//result = [];
//for(i=0;i<array.length;i++)
// array.push(2);
// console.log(array);
// array.push(6);
// console.log(array);

// var array1 = [1,2,3,4,5];


// for (var i=0;i<array1.length;i++){
//     var result = [];
//     result.push(2);
    
// }
// console.log(result);


// console.log(array1);


// let scores =[10,30,0,50,100,20,15];


// for(let i=0;i<scores.length;i++){


// if(scores[i]===0){
//     continue;
// }

// console.log("your score is" ,scores[i]);

// // if (scores[i]===100){
// //     console.log("you have top score");
// //     break;
// // }
// }

// function specialCharacters(password){
//     let specialCharactersMess = 'There is no special characters in your password!';
//     const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        
//  if(specialChars.test(password)){
//      return true;              
//          } else {
//              console.log(specialCharactersMess);
//              return false;
//          }
//          }
 
//           specialCharacters('Radar1[');



// function checkLength(password){
//     let passLengthMess = "Password length must be between 6 and 24 characters!";
//     if(password.length > 6 && password.length < 24) {   
//        return true;
//    } else {
//        console.log(passLengthMess);
//        return false;
//    }
// }
//       checkLength("papa");








// function lowercaseLetter(password){
//     let lowerCaseMess = 'There is no lowercase letter in your password!';
//     for (i=0; i<password.length;i++){
//         if (password[i] === password[i].toLowerCase()){
//             return true;              
//     } else {
//         console.log(lowerCaseMess);
//         return false;
//     }
//     }
// }
//  lowercaseLetter("HHHHHHHsfff");




// function lowercaseLetter(password){
//     let lowerCaseMess = 'There is no lowercase letter in your password!';
//     for (i=0; i<password.length;i++){
//         if (password[i] !== password[i].toUpperCase()){
//             return true;              
//     } else {
//         console.log(lowerCaseMess);
//         return false;
//     }
//     }
// }

//  lowercaseLetter('HHHHHHhhhh');

// function lowercaseLetter(password){
//     let lowercaseMess = 'There is no lowercase letter in your password!';
//        let lowercaseLetter = /[a-z]/;
        
//  if(lowercaseLetter.test(password)){
//      return true;              
//          } else {
//              console.log(lowercaseMess);
//              return false;
//          }
//          }

//          lowercaseLetter("DDDDDDDg");
