document.addEventListener("DOMContentLoaded", function(){

    // definicija funkcije za rukovanje podacima
  var rukujPodacima = function(podaci, roditelj){
    var nazivFilma, godinaIzlaska, nazivZanra, rezultat = "";
    if(podaci.length > 0){
        rezultat += "<table border='1'><tr><th>Naziv filma</th><th>Godina izlaska</th><th>Naziv žanra</th></tr>";
        for(let i = 0; i < podaci.length; i++) {
            nazivFilma = podaci[i].nazivFilma;
            godinaIzlaska = podaci[i].godinaIzlaska;
            nazivZanra = podaci[i].nazivZanra;
            rezultat += "<tr><td>" + nazivFilma + "</td><td>" + godinaIzlaska + "</td><td>" + nazivZanra + "</td></tr>";
        }
        rezultat += "</table>";
    }
    else{
        rezultat = "<h3>Nije pronađen niti jedan film.</h3>";
    }
    roditelj.innerHTML = rezultat;
  }

  // definicija funkcije za rukovanje greškom
  var rukujGreskom = function(greska, roditelj){
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  }

  // AJAX - dohvaćanje filmova po godini izlaska
    var spremnik = document.getElementById("spremnik");
    var polje1 = document.getElementById("godinamin");
    var polje2 = document.getElementById("godinamax");
    document.getElementById("btntrazi").addEventListener("click", function(){
        var godinaMin = polje1.value.trim();
        var godinaMax = polje2.value.trim();

        if (godinaMin != "" && godinaMax != "") {
            fetch(`http://hlapcic-education.atwebpages.com/filmovi.php?godinamin=${godinaMin}&godinamax=${godinaMax}`)
            .then(odgovor => odgovor.json())
            .then(podaci => rukujPodacima(podaci, spremnik))
            .catch(greska => rukujGreskom(greska.toString(), spremnik));
        }
        else{
            spremnik.innerHTML = "<h3>Za uspješnu pretragu filmova upišite obje godine.</h3>";
        }
    });

});