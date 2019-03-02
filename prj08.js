function trigAnimate() {
    document.getElementById("static").id = "animated";
    document.getElementById("anButton").innerHTML = "Stop";
    document.getElementById("anButton").onclick = stopAnimate;
}

function stopAnimate() {
    document.getElementById("animated").id = "static";
    document.getElementById("anButton").innerHTML = "Start";
    document.getElementById("anButton").onclick = trigAnimate;
}

function startTransition() {
    var div = document.getElementById("transition");
    div.style.width = "100%";
    div.style.height = "400px";
    document.getElementById("trButton").innerHTML = "Shrink";
    document.getElementById("trButton").onclick = reverseTransition;
}

function reverseTransition() {
    var div = document.getElementById("transition");
    div.style.width = "80px";
    div.style.height = "10px";
    document.getElementById("trButton").innerHTML = "Grow";
    document.getElementById("trButton").onclick = startTransition;
}