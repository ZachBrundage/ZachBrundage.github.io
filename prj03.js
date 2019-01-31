function createUser() {
    
    // Get Input Values from HTML Form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    
    // Turn Input Into Object
    var userObj = {
        fName: firstName, 
        lName: lastName, 
        uName: username, 
        pass: password,
        eAddress: email
    };
    
    // Convert Object to JSON
    var jsonFile = JSON.stringify(userObj);
    
    // Push JSON to local storage
    localStorage.setItem("JSON", jsonFile);
    
    displayJSON();
}

function displayJSON() {
    
    // Get JSON from local storage
    var jsonFile = localStorage.getItem("JSON");
    
    // Parse JSON back to Object
    var obj = JSON.parse(jsonFile);
    
    // Display via DOM
    document.getElementById("fName").innerHTML = "First Name: " + obj.fName;
    document.getElementById("lName").innerHTML = "Last Name: " + obj.lName;
    document.getElementById("uName").innerHTML = "Username: " + obj.uName;
    document.getElementById("pass").innerHTML = "Password: " + obj.pass;
    document.getElementById("em").innerHTML = "Email: " + obj.eAddress;
}

