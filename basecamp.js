localStorage.clear();

var accessToken = "access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNi0wNVQyMTo0NTo0M1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNtdQdwEuNubYJOg1uYW5vX251bWkCGQM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgd5MDoJem9uZUkiCFVUQwY7AEY=--2dbe47179509ede01353b354350b6eb8a6f2f61c";

function display(){
    var str01 = localStorage.getItem("PlazaOne");
    var str02 = localStorage.getItem("PlazaTwo");
    var str03 = localStorage.getItem("PlazaThree");
    var str04 = localStorage.getItem("PlazaFour");
    var str05 = localStorage.getItem("PlazaFive");
    var str06 = localStorage.getItem("PlazaSix");
    var str07 = localStorage.getItem("PlazaSeven");
    var str08 = localStorage.getItem("PlazaEight");
    
    var data01 = JSON.parse(str01);
    var data02 = JSON.parse(str02);
    var data03 = JSON.parse(str03);
    var data04 = JSON.parse(str04);
    var data05 = JSON.parse(str05);
    var data06 = JSON.parse(str06);
    var data07 = JSON.parse(str07);
    var data08 = JSON.parse(str08);
    
    console.log(data01);
    console.log(data02);
    console.log(data03);
    console.log(data04);
    console.log(data05);
    console.log(data06);
    console.log(data07);
    console.log(data08);
}

function callPlaza(){
    getPlazaTodos();
    getPlazaTodosTwo();
    getPlazaTodosThree();
    getPlazaTodosFour();
    getPlazaTodosFive();
    getPlazaTodosSix();
    getPlazaTodosSeven();
    getPlazaTodosEight();
    
    var btn = document.getElementById("btn-hidden");
    btn.style.opacity = "1";
}

function callBigby(){
    getBigbyTodos();
    getBigbyTodosTwo();
    
    var btn = document.getElementById("btn-hidden");
    btn.style.opacity = "1";
}

function callWestgate(){
    getWestgateTodos();
    getWestgateTodosTwo();
    
    var btn = document.getElementById("btn-hidden");
    btn.style.opacity = "1";
}

function callWalnut() {
    getWalnutTodos();
    getWalnutTodosTwo();
    getWalnutTodosThree();
    getWalnutTodosFour();
    
    var btn = document.getElementById("btn-hidden");
    btn.style.opacity = "1";
}

function getPlazaTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&" + accessToken;
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaOne", this.response);
        }
    };
    
    //xmlHttp.setRequestHeader('Content-Type', 'application/json');
    //xmlHttp.withCredentials = true;
    xmlHttp.send();
}
function getPlazaTodosTwo() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=2&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaTwo", this.response);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosThree() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=3&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaThree", this.response);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosFour() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=4&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaFour", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosFive() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=5&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaFive", this.response);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosSix() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=6&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaSix", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosSeven() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=7&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaSeven", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosEight() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=8&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaEight", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getBigbyTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348667&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("BigbyOne", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getBigbyTodosTwo() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348667&page=2&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("BigbyTwo", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getWestgateTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348677&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("WestgateOne", this.response); 
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getWestgateTodosTwo() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348677&page=2&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("WestgateTwo", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getWalnutTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348681&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("WalnutOne", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getWalnutTodosTwo() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348681&page=2&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("WalnutTwo", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getWalnutTodosThree() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348681&page=3&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("WalnutThree", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getWalnutTodosFour() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348681&page=4&" + accessToken;

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("WalnutFour", this.response);
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}