
/*
function vaihe1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(lista);
    }
  };
  const haku = document.getElementById("hakuteksti").value;
  //const lista = [xhttp.open("GET", "http://api.tvmaze.com/singlesearch/shows?q=" + haku, true)];

  xhttp.open("GET", "http://api.tvmaze.com/singlesearch/shows?q=" + haku, true);
  xhttp.send();
}
*/
const xhr = new XMLHttpRequest();
                                                                  

function hae() {
  const haku = document.getElementById("hakuteksti").value;
  xhr.open('get', 'http://api.tvmaze.com/search/shows?q=' + haku, true);
  xhr.onreadystatechange = listaus;
  xhr.send(null);
}




function listaus() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    div = document.querySelector(".tulostus");
    div.innerHTML = "";
    const lista = JSON.parse(xhr.responseText);
    //console.log(xhr.responseText);
    for (i=0; i<lista.length; i++) {
      h2 = document.createElement("h2");
      p = document.createElement("p");
      let nimi = document.createTextNode(lista[i].show.name);

      if (lista[i].show.image===null) {
        console.log(lista[i].show.name + " Ei kuvaa");
      } else {
        img = document.createElement("img");
        img.src = lista[i].show.image.medium;
        img.alt = "kuva";
        div.appendChild(img);
      }

      div.appendChild(h2);
      div.appendChild(p);
      h2.appendChild(nimi);

      if (lista[i].show.officialSite===null) {
        p.innerHTML += "<a href='" + lista[i].show.url + "'>TVMAZEN sivut</a>";
      } else {
        p.innerHTML += "<a href='" + lista[i].show.officialSite + "'>Kotisivut</a>";
      }

      if (lista[i].show.genres===null) {
        console.log(lista[i].show.name + "Ei genreä")
      } else {
        p.appendChild(document.createElement("br"));
        p.innerHTML += lista[i].show.genres;
      }

      if (lista[i].show.summary===null) {
        console.log(lista[i].show.name + " Ei kuvausta");
      } else {
      p.innerHTML += lista[i].show.summary;
      }
      div.appendChild(document.createElement("br"));



      /*
      document.querySelector("img").src = lista[i].show.image.medium;
      document.querySelector("p").innerHTML += lista[i].show.name + "<br>";
      document.querySelector("p").innerHTML += "<a href='" + lista[i].show.officialSite + "'>Kotisivut</a>";
      document.querySelector("p").innerHTML += lista[i].show.summary;
      */
    }
    console.log('Haku valmis');
  }
}
