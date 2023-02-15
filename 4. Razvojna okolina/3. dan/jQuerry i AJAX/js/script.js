$(document).ready(function() {
    var trazilica = $("#trazilica");
    var filmovi = $("#filmovi");

    trazilica.keyup(function() {
        var vrijednost = trazilica.val().trim();
        if(vrijednost != "") {
            $.ajax({
                type: "get",
                url: `https://frodo.ess.hr/api/filmovi-po-nazivu-json.php?pojam=${vrijednost}`,
                dataType: "json",
                success: function(podaci){
                    var rezultat;
                    if(podaci.length > 0) {
                        var nazivFilma, godinaIzlaska, nazivZanra;
                        rezultat = "<table border='1'><tr><th>Naziv filma</th><th>Godina izlaska</th><th>Naziv zanra</th></tr>";
                        for(let i = 0; i < podaci.length; i++) {
                            nazivFilma = podaci[i].nazivFilma;
                            godinaIzlaska = podaci[i].godinaIzlaska;
                            nazivZanra = podaci[i].nazivZanra;
                            rezultat += "<tr><td>" + nazivFilma + "</td><td>" + godinaIzlaska + "</td><td>" + nazivZanra + "</td></tr>";
                        }
                        rezultat += "</table>";
                    } else {
                        rezultat = "<h3>Nije pronađeni niti jedan rezultat</h3>";
                    }
                    filmovi.html(rezultat);
                },
                error: function(xhr){
                    var errorMessage = xhr.status + ": " + xhr.statusText;
                    console.log("Error: " + errorMessage);
                }
            });
        } else {
            filmovi.empty();
        }
    });
});