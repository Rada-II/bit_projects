/*4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
podataka pojedinačnih elemenata ulaznog niza.*/


var arr = [1, 'a', [], '4', 5, 34, true, undefined, null];
function groupDataTypes(arr) {
   var res = [];
   for(let i = 0; i < arr.length; i++){
          res.push(typeof arr[i])
   }
   return res;
};
console.log(groupDataTypes(arr));

//var resu
//       var el = arr[i];
//       var type = typeof el;
//       if(res.hasOwnProperty(type)){
//          res[type].push(el);
//       }else{
//          res[type] = [el];
//       };
//    };