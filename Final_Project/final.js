function hideOne() {
    var myBtns = document.getElementsByClassName("quizBtn_One");
    var i;
    for (i = 0; i < myBtns.length; i++){
        myBtns[i].style.display = "none";
    }
    showSelectExp();
}

function showSelectExp() {
    var myBtns = document.getElementsByClassName("quizBtn_SelectExp");
    var i;
    for (i = 0; i < myBtns.length; i++){
        myBtns[i].style.display = "initial";
    }
}