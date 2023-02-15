document.addEventListener("DOMContentLoaded", function(){
    var korisnickiPodaci = document.getElementById("korisnickipodaci");
    var xhttp = new XMLHttpRequest();
    console.log("ok")
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var korisnickoIme, imePrezime, email, slikaKorisnika;
            var podaci = "";
            var jsonData = JSON.parse(this.responseText);

            if(jsonData.length > 0){
                podaci += "<div>"
                for(let i = 0; i < jsonData.length; i++){
                    korisnickoIme = jsonData[i].korisnickoIme;
                    imePrezime = jsonData[i].korisnickoIme;
                    email = jsonData[i].email;
                    slikaKorisnika = jsonData[i].slikaKorisnika;
                    podaci += `<div class='user'><span>${imePrezime} (${korisnickoIme})</span><br /><img src='${slikaKorisnika}'/><br /><hr /><span>${email}</span></div>`;
                }
                podaci += "</div>";
            }
            korisnickiPodaci.innerHTML = podaci;
        }
    }
    xhttp.open("GET", "http://frodo.ess.hr/api/korisnici-json.php", true);
    xhttp.send();
})