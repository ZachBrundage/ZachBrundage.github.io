function createUser() {
    
    alert("CALLED");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    
    var userObj = {
        fName: firstName, 
        lName: lastName, 
        uName: username, 
        pass: password,
        eAddress: email
    };
    
    var jsonFile = JSON.stringify(userObj);
    localStorage.setItem("prj03JSON", jsonFile);
}