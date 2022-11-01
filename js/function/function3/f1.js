/*1. Write a program to insert a string within a string at a particular position (default is 1,
    beginning of a string).
    "My random string", "JS" -> "JS My random string"
    "My random string", "JS", 10 -> "My random JS string"*/

    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }

    var func = (insert(" My random string", 10, " JS"));
    console.log(func);




// my_string = "My random string";
// my_insert = " JS ";
// my_insert_location = 0;//def position
// //my_insert_location = 10; second example

// my_string = my_string.split("");
// my_string.splice(my_insert_location, 0, my_insert);
// my_string = my_string.join("");

// console.log(my_string);