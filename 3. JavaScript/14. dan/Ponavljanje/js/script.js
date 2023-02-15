function filmovi() {
    var podaciFilmova = document.getElementById("podaciFilmova");
    var xhttp = new XMLHttpRequest();
    var pocetna = document.getElementById("pocetna").value;
    var zavrsna = document.getElementById("zavrsna").value;
    xhttp.onreadystatechange = function(){
        if ((pocetna && zavrsna) != "") {
            if(this.readyState == 4 && this.status == 200){
                var nazivFilma, godinaIzlaska, nazivZanra;
                var podaci = "";
                var jsonData = JSON.parse(this.responseText);
                if(jsonData.length > 0){
                    podaci += `
                    <table>
                        <tr>
                        <th>Naziv filma</th>
                        <th>Godina izlaska</th>
                        <th>Naziv Zanra</th>
                        </tr>
                    `
                    for(let i = 0; i < jsonData.length; i++){
                        nazivFilma = jsonData[i].nazivFilma;
                        godinaIzlaska = jsonData[i].godinaIzlaska;
                        nazivZanra = jsonData[i].nazivZanra;
                        podaci += `
                        <tr>
                        <td>${nazivFilma}</td>
                        <td>${godinaIzlaska}</td>
                        <td>${nazivZanra}</td>
                        </tr>
                        `
                    }
                    podaci += "</table>";
                
                    podaciFilmova.innerHTML = podaci;
                } else {
                    podaciFilmova.innerHTML = "Nije pronađen niti jedan film"
                }
            }
        } else {
            podaciFilmova.innerHTML = "Unesite godine."
        }


    }
    xhttp.open("GET", `http://hlapcic-education.atwebpages.com/filmovi.php?godinamin=${pocetna}&godinamax=${zavrsna}`, true);
    xhttp.send();
}