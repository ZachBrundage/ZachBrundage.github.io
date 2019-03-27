function sendFranmarRequest() {
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/buckets/11511950/todolists/1689002219/todos.json?access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547";

    // Parse JSON response
    xmlHttp.onreadystatechange = function () {
        if (this.status === 200){
            var data = JSON.parse(this.response);
            console.log(data);
            display(data);
        }
        else if(this.status === 305){
            alert("No Change");
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function sendPlazaRequest() {
    
    document.getElementById("display").innerHTML = "";
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/buckets/11349404/todosets/1662772918/todolists.json?access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547";

    // Parse JSON response
    xmlHttp.onreadystatechange = function () {
        if (this.status === 200){
            var data = JSON.parse(this.response);
            var nextPage = xmlHttp.getResponseHeader("link");
            console.log(nextPage);
            console.log(data);
            for (var i = 0; i < data.length; i++){
                document.getElementById("display").innerHTML += data[i].title + "<br><br>";
            }
        }
        else if(this.status === 304){
            alert("No Change");
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    sendPlazaRequestTwo();
}

function sendPlazaRequestTwo() {
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/buckets/11349404/todosets/1662772918/todolists.json?page=2&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547";

    // Parse JSON response
    xmlHttp.onreadystatechange = function () {
        if (this.status === 200){
            var data = JSON.parse(this.response);
            var nextPage = xmlHttp.getResponseHeader("link");
            console.log(nextPage);
            console.log(data);
            for (var i = 0; i < data.length; i++){
                document.getElementById("display").innerHTML += data[i].title + "<br><br>";
            }
        }
        else if(this.status === 304){
            alert("No Change");
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    sendPlazaRequestThree();
}

function sendPlazaRequestThree() {
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/buckets/11349404/todosets/1662772918/todolists.json?page=3&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547";

    // Parse JSON response
    xmlHttp.onreadystatechange = function () {
        if (this.status === 200){
            var data = JSON.parse(this.response);
            var nextPage = xmlHttp.getResponseHeader("link");
            console.log(nextPage);
            console.log(data);
            for (var i = 0; i < data.length; i++){
                document.getElementById("display").innerHTML += data[i].title + "<br><br>";
            }
        }
        else if(this.status === 304){
            alert("No Change");
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    sendPlazaRequestFour();
}

function sendPlazaRequestFour() {
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/buckets/11349404/todosets/1662772918/todolists.json?page=4&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547";

    // Parse JSON response
    xmlHttp.onreadystatechange = function () {
        if (this.status === 200){
            var data = JSON.parse(this.response);
            var nextPage = xmlHttp.getResponseHeader("link");
            console.log(nextPage);
            console.log(data);
            for (var i = 0; i < data.length; i++){
                document.getElementById("display").innerHTML += data[i].title + "<br><br>";
            }
        }
        else if(this.status === 304){
            alert("No Change");
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function plazaItemRequest(listId) {
    // Create an XMLHttpRequest Object
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/buckets/11349404/todolists/" + listId + "/todos.json?access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547";

    // Parse JSON response
    xmlHttp.onreadystatechange = function () {
        if (this.status === 200){
            var data = JSON.parse(this.response);
            console.log(data);
            plazaCallback(data);
        }
    };
    
    // Send XMLHttpRequest
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    
    return true;
}

function plazaCallback(data){
    
    for (var i = 0; i < data.length; i++){
        document.getElementById("display").innerHTML += data[i].title + "<br>"; 
    }
}

function display(data) {
    var i = 0;
    document.getElementById("display").innerHTML = "";
    for (i; i < data.length; i++){
        document.getElementById("display").innerHTML += data[i].title + "<br><br>";
    }
}