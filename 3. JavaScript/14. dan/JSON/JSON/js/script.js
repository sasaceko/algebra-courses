document.addEventListener("DOMContentLoaded", function(){

    var spremnik = document.getElementById("spremnik");
    var polje1 = document.getElementById("godinamin");
    var polje2 = document.getElementById("godinamax");

    document.getElementById("btntrazi").addEventListener("click", function(){
        var godinaMin = polje1.value.trim();
        var godinaMax = polje2.value.trim();

        if(godinaMin != "" && godinaMax != ""){
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    var nazivFilma, godinaIzlaska, nazivZanra, rezultat = "";
                    var podaci = JSON.parse(this.responseText);
                    if(podaci.length > 0){
                        rezultat += "<table border='1'><tr><th>Naziv filma</th><th>Godina izlaska</th><th>Naziv žanra</th></tr>";
                        for(let i = 0; i < podaci.length; i++){
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
                    spremnik.innerHTML = rezultat;
                }
            }

            xhttp.open("GET", `http://hlapcic-education.atwebpages.com/filmovi.php?godinamin=${godinaMin}&godinamax=${godinaMax}`, true);
            xhttp.send();
        }
        else{
            spremnik.innerHTML = "<h3>Za uspješnu pretragu filmova unesite obje godine.</h3>";
        }
    });

});