/*3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
samoglasnika i koliko suglasnika.*/

function vowel(str){ 
    var string = str.replaceAll(" ","").replaceAll(".","").replaceAll(",","").replaceAll("?","");
    //console.log(string);
    var count = 0;
    var counts = 0;
    for(var i = 0; i < string.length; i++){
    if(string[i] == 'a' || string[i] == 'i' || string[i] == 'o' ||string[i] == 'e' ||string[i] == 'u'){ 
        count+=1;
    }else counts +=1
    }
    return "Number of vowels is " + count + " and number od consonant is " + counts;
    }
    var result = vowel("fun k?ci ja");
    console.log(result);
    












// function vowel_count(string1){
//   var vowel_list = 'a,e,i,o,u,'
//   var vcount = 0;
//   var scount = 0;
//   for(var x = 0; x < string1.length ; x++)
//   {
//     if (vowel_list.indexOf(string1[x]) !== -1){
//       vcount += 1;// vcount ++
//     }  else ()
//   }
//   return vcount;
// }
// console.log(vowel_count("funkcija"));


// // function consonant_count(string2)
// {
//   var consonant_list = 'b, c, č, ć, d, dž, đ, f, g, h, k, p, s, š, t, z, ž'
//   var ccount = 0;
//   for(var x = 0; x < string2.length ; x++)
//   {
//     if (consonant_list.indexOf(string2[x]) !== -1)
//     {
//       ccount += 1;
//     }
//   }
//   return ccount;
// }
// console.log(consonant_count("bbbccdddpsssskhhhhgffff"));