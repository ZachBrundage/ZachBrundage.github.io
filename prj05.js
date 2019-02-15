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

var assocArray = {"dog" : 1, "cat" : 2, "bird" : 3};

function setImage(){
    var input = document.getElementById("assoc").value;
    if (assocArray[input] == 1)
        localStorage.setItem("url", "dog.jpg");
    else if (assocArray[input] == 2)
        localStorage.setItem("url", "cat.jpg");
    else if (assocArray[input] == 3)
        localStorage.setItem("url", "bird.jpg");
    else
        localStorage.setItem("url", "");
    alert("Sent to Local Storage!");
}

function getImage() {

    var url = localStorage.getItem("url");
    document.getElementById("assocImg").src = url;
}

function setUser() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var userObj = {
        uName: username, 
        pass: password
    };
    var json = JSON.stringify(userObj);
    localStorage.setItem("user", json);
    alert("Created User and Sent to Storage!");
}

function getUser() {
    
    var jsonFile = localStorage.getItem("user");
    var obj = JSON.parse(jsonFile);
    document.getElementById("displayUser").innerHTML = "Username: " + obj.uName + "<br>" + "Passwrd: " + obj.pass;
}