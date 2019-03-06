var check = false;

function onClick() {
    if (check == false){
         document.getElementById("div0").style.backgroundColor = "red";
         check = true;
    }
    else {
        document.getElementById("div0").style.backgroundColor = "white";
        check = false;
    }
   
}

function mouseOver() {
    document.getElementById("div1").style.backgroundColor = "red";
}

function mouseOut() {
    document.getElementById("div1").style.backgroundColor = "white";
}

function onKeyDown(){
    document.getElementById("input").style.backgroundColor = "grey";
}

function onLoad() {
    var pic = Math.floor((Math.random() * 3) + 1);
    console.log(pic);
    if (pic == 1)
        document.getElementById("img").src = "dog.jpg";
    else if (pic == 2)
        document.getElementById("img").src = "cat.jpg";
    else
        document.getElementById("img").src = "bird.jpg";
}

function onTouch() {
    document.getElementById("div2").style.backgroundColor = "red";
}

function offTouch() {
    document.getElementById("div2").style.backgroundColor = "white";
}

function onMove() {
     document.getElementById("div3").style.backgroundColor = "red";
}

function offMove() {
    document.getElementById("div3").style.backgroundColor = "white";
}

function start() {
    var anim = document.getElementById("div4");
    anim.style.animation = "animate 3s infinite";
    anim.addEventListener("animationiteration", iterate);
}


function iterate() {
    var r = Math.floor((Math.random() * 255) + 1);
    var g = Math.floor((Math.random() * 255) + 1);
    var b = Math.floor((Math.random() * 255) + 1);
    this.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

function startTrans() {
    var div = document.getElementById("div5");
    div.style.backgroundColor = "red";
    div.addEventListener("transitionend", iterate);
}