var plazaDataOne;
var plazaDataTwo;
var plazaDataThree;
var plazaDataFour;
var plazaDataFive;
var plazaDataSix;
var plazaDataSeven;
var plazaDataEight;

localStorage.clear();

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
}

function getPlazaTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            localStorage.setItem("PlazaOne", this.response);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function getPlazaTodosTwo() {
    
    var xmlHttp = new XMLHttpRequest();
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=2&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=3&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=4&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=5&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=6&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=7&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11349404&page=8&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

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
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348667&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            var data = JSON.parse(this.response);
            for (var i = 0; i < data.length; i++){
                console.log("Item: " + data[i].title);
                console.log("Unit: " + data[i].parent.title);
                console.log("Completed?: " + data[i].completed); 
                console.log("////////////");
            } 
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getWestgateTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348677&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            var data = JSON.parse(this.response);
            for (var i = 0; i < data.length; i++){
                console.log("Item: " + data[i].title);
                console.log("Unit: " + data[i].parent.title);
                console.log("Completed?: " + data[i].completed); 
                console.log("////////////");
            } 
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getWalnutTodos() {
    
    var xmlHttp = new XMLHttpRequest();
    var url = "https://3.basecampapi.com/4191003/projects/recordings.json?type=Todo&bucket=11348681&access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0yNVQyMTozNDo1OVoiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNc8dwMiVtIsJOg1uYW5vX251bWkCUQE6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgczcDoJem9uZUkiCFVUQwY7AEY=--2397b353eb46b3b3a25f9a8f3fe99ea9fb49534b";

    xmlHttp.onreadystatechange = function () {
      
        if (this.status === 200){
            var data = JSON.parse(this.response);
            for (var i = 0; i < data.length; i++){
                console.log("Item: " + data[i].title);
                console.log("Unit: " + data[i].parent.title);
                console.log("Completed?: " + data[i].completed); 
                console.log("////////////");
            } 
        }
    };
    
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}