var choiceOne;
function selectOptOne(obj) {
    obj.style.backgroundColor = "lightgrey";
    obj.style.border = "1px solid black";
    choiceOne = true;
    document.getElementById("next_One").style.display = "initial";
    
    var otherBtn = document.getElementsByClassName("quizBtn_One");
    otherBtn[1].style.backgroundColor = "white";
    otherBtn[1].style.border = "none";
}

function selectOptTwo(obj){
    obj.style.backgroundColor = "lightgrey";
    obj.style.border = "1px solid black";
    choiceOne = false;
    document.getElementById("next_One").style.display = "initial";
    
    var otherBtn = document.getElementsByClassName("quizBtn_One");
    otherBtn[0].style.backgroundColor = "white";
    otherBtn[0].style.border = "none";
}

function hideOne() {
    
    document.getElementById("next_One").style.display = "none";
    var title = document.getElementsByClassName("welcome");
    title[0].style.display = "none";

    var myBtns = document.getElementsByClassName("quizBtn_One");
    var i;
    for (i = 0; i < myBtns.length; i++){
        myBtns[i].style.display = "none";
    }
    showSelectExp();
}

function showSelectExp() {
    document.getElementById("exp").style.display = "initial";
    var myBtns = document.getElementsByClassName("quizBtn_SelectExp");
    var i;
    for (i = 0; i < myBtns.length; i++){
        myBtns[i].style.display = "initial";
    }
}