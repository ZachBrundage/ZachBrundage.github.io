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

var inputArray = [];

function pushArrayInput(){
    var input = document.getElementById("arrayInput").value;
    var strInput = input.toString();
    inputArray.push(strInput);
    document.getElementById("displayArray").innerHTML = inputArray;
}