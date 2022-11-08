function test(str , letter){
        var result = "";
        var letter = "a";
    for (var i = 0; i < str.length; i++){
        if(str[i] == ""){
        result = str[i]+ letter;
    }else{
        result+=str[i];
    }
    }
    return result;  
    }
    var res = test("neki mail dejan", "z");
    console.log(res);
