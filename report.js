
function generateReport() {
    var data = [];
    for (var i = 0; i < localStorage.length; i++){
        data[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    var count = 0;
    for (let text of data){
        for (var j = 0; j < text.length; j++){
            var table = document.getElementById("punch");
            var row = table.insertRow(j+1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = text[j].parent.title;
            cell2.innerHTML = text[j].title;
            cell3.innerHTML = text[j].completed;
            
            count++;
        }
    }
    console.log(count);
}
