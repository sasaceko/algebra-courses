$(document).ready(function() {
    var korisnickiPodaci = $("#korisnickipodaci");

    $.ajax({
        url: "https://frodo.ess.hr/api/korisnici-json.php",
        dataType: "json",
        success: function(podaci) {
            var rezultat;
            if(podaci.length > 0){
                rezultat += "<div>"
                for(let i = 0; i < podaci.length; i++){
                    korisnickoIme = podaci[i].korisnickoIme;
                    imePrezime = podaci[i].korisnickoIme;
                    email = podaci[i].email;
                    slikaKorisnika = podaci[i].slikaKorisnika;
                    rezultat += `<div class='user'><span>${imePrezime} (${korisnickoIme})</span><br /><img src='${slikaKorisnika}'/><br /><hr /><span>${email}</span></div>`;
                }
                rezultat += "</div>";
            } else {
                rezultat = "<h3>Ne radi</h3>"
            }
            korisnickiPodaci.html(rezultat);
        },
        error: function(xhr){
            var errorMessage = xhr.status + ": " + xhr.statusText;
            console.log("Error: " + errorMessage);
        } 
    });
});