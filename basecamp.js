function sendFranmarRequest() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://3.basecampapi.com/4191003/buckets/11511950/todolists/1689002219/todos.json?access_token=BAhbB0kiAbB7ImNsaWVudF9pZCI6IjBmN2U2NjJlMTZkNmMyMDNmOGYyZWFlOWQ3ZTZjYzU4NTRkNDYyMGQiLCJleHBpcmVzX2F0IjoiMjAxOS0wNC0wOVQyMDoyMTowM1oiLCJ1c2VyX2lkcyI6WzM5MTQ3Mzk5XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiZWRlNThiNDk4MDhkNmFlMTQ2YjcyMDkzNjNlNGRjNDkifQY6BkVUSXU6CVRpbWUNNM0dwM3NO1QJOg1uYW5vX251bWkClAM6DW5hbm9fZGVuaQY6DXN1Ym1pY3JvIgeRYDoJem9uZUkiCFVUQwY7AEY=--e81cb35aefe218064d4ee49efd76d861a9dfa547");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "28353c2b-6746-403c-85ce-c98fd605bc27");

    xhr.send(data);
}