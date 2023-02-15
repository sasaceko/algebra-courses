document.addEventListener("DOMContentLoaded", function() {
    var spremnik = document.getElementById("spremnik");
    var selectValue = document.getElementById("books");
    var loading = document.getElementById("loading");

    function fadeOut() {
        loading.classList.add('fade-out');
        loading.addEventListener('transitionend', function () {
          loading.parentNode.removeChild(element);
        });
    }

    setTimeout(fadeOut.bind(this, loading), 1000);

    selectValue.addEventListener("change", function() {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                var naslovKnjige, godinaIzdanja, cijena, cijenaUkupno = 0, rezultat = "";
                var podaci = JSON.parse(this.responseText);
                if(podaci.length > 0) {
                    rezultat += "<table><tr><th>Naslov knjige</th><th>Godina izdanja</th><th>Cijena</th></tr>";
                    for(let i = 0; i < podaci.length; i++) {
                        naslovKnjige = podaci[i].naslovKnjige;
                        godinaIzdanja = podaci[i].godinaIzdanja;
                        cijena = +podaci[i].cijena;
                        cijenaUkupno += cijena;
                        rezultat += "<tr><td>" + naslovKnjige + "</td><td>" + godinaIzdanja + "</td><td>" + cijena + "</td></tr>";
                    }

                    rezultat += "<tr><td colspan='2'>Ukupno:</td><td>" + cijenaUkupno + "</td></tr></table>";
                }
                spremnik.innerHTML = rezultat;
            }
        }
        xhttp.open("GET", `https://frodo.ess.hr/api/knjige-json.php?autor=${selectValue.value}`, true);
        xhttp.send();
    })
})