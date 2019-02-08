var xmlHttp = new XMLHttpRequest();
var url = "prj04.txt";

xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status ==200){
        var gallery = JSON.parse(this.responseText);
        display(gallery);
    }
};
xmlHttp.open("GET", url, true);
xmlHttp.send();

function display(gallery){
    var displayGallery = "";
    for (var i = 0; i < gallery.length; i++){
        displayGallery += '<img src="' + gallery[i].file + '">' + '<br>';
    }
    document.getElementById("display").innerHTML = displayGallery;
}