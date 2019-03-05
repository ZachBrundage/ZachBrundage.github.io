function red(){
    
    document.getElementById("containerCenter").style.backgroundColor = "red";
}

function blue(){
    
    document.getElementById("containerCenter").style.backgroundColor = "blue";
}

function green(){
    
    document.getElementById("containerCenter").style.backgroundColor = "green";
}

function random(){
    
    var r = Math.floor((Math.random() * 255) + 1);
    var g = Math.floor((Math.random() * 255) + 1);
    var b = Math.floor((Math.random() * 255) + 1);
    document.getElementById("containerCenter").style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
    
    document.getElementById("containerCenter").style.backgroundColor = "white";
}