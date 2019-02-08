function sendRequest() {
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "prj04.txt";

    // Parse JSON from text file
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            var gallery = JSON.parse(this.responseText);
            display(gallery);
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function display(gallery){
    // Display Variable
    var displayGallery = "";
    
    // Loop through gallery object
    for (var i = 0; i < gallery.length; i++){
        displayGallery += '<img src="' + gallery[i].file + '">' + '<br>';
    }
    
    // Display on webpafe via DOM
    document.getElementById("display").innerHTML = displayGallery;
}