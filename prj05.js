function setSimple() {

    var data = document.getElementById("simple").value;
    localStorage.setItem("simpleData", data);
    alert("Sent to Local Storage!");
}

function getSimple(){
    
    document.getElementById("displaySimple").innerHTML = localStorage.getItem("simpleData");
}

var inputArray = [];

function pushArrayInput(){
    var input = document.getElementById("array").value;
    var strInput = input.toString();
    inputArray.push(strInput);
    document.getElementById("disArray").innerHTML = inputArray;
}

function setArray() {
    
    var arr = JSON.stringify(inputArray);
    localStorage.setItem("array", arr);
    alert("Sent to Local Storage!");
}

function getArray() {

    var local = localStorage.getItem("array");
    var arr = JSON.parse(local);
    document.getElementById("displayArray").innerHTML = arr;
}

function setUser() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userObj = {
        uName: username, 
        pass: password
    };
    var json = JSON.stringify(userObj);
    localStorage.setItem("user", jsonFile);
}

function getUser() {
    
    var jsonFile = localStorage.getItem("JSON");
    var obj = JSON.parse(jsonFile);
    document.getElementById("displayUser").innerHTML = 
}