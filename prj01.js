function fillVariables(){
    var intVar = 3;
    var fltVar = 3.15;
    var strVar = "Hello World!"
    
    document.getElementById("intVar").innerHTML = intVar;
    document.getElementById("fltVar").innerHTML = fltVar;
    document.getElementById("strVar").innerHTML = strVar;
}

function resetVariables(){
    document.getElementById("intVar").innerHTML = "Int";
    document.getElementById("fltVar").innerHTML = "Float";
    document.getElementById("strVar").innerHTML = "String";
}

function displayParameter(param){
    document.getElementById("displayParam").innerHTML = param;
}

function checkInput(){
    var input = document.getElementById("conditional").value;
    if (input < 11 || input < 0){
        document.getElementById("displayInput").innerHTML = input;
    }
    else{
        document.getElementById("displayInput").innerHTML = "ERROR";
    }
}

function loopAlphabet(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var display = "";
    for (var i = 0; i < 26; i++){
        display = display + " " + alphabet.charAt(i);
        document.getElementById("displayAlpha").innerHTML = display;
    }
}



var assocArray = {"dog" : 1, "cat" : 2, "bird" : 3};

function selectImage(){
    var input = document.getElementById("assocArrayInput").value;
    if (assocArray[input] == 1)
        document.getElementById("arrayPic").src = "dog.jpg";
    else if (assocArray[input] == 2)
        document.getElementById("arrayPic").src = "cat.jpg";
    else if (assocArray[input] == 3)
        document.getElementById("arrayPic").src = "bird.jpg";
    else
        document.getElementById("arrayPic").src = "";
}