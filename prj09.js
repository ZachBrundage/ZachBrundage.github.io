var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var xPos = 40;
var yPos = 50;

var fwd = true;

function draw(){
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(xPos, yPos, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
    
    if (fwd == true){
        moveForward();
    }
    else {
        moveBackward();
    }
}


function moveForward(){
    if (xPos == 360){
        fwd = false;
    }
    else {
        xPos++;
    }
}

function moveBackward(){
    if (xPos == 40){
        fwd = true;
    }
    else{
        xPos--;
    }
}
setInterval(draw, 10);