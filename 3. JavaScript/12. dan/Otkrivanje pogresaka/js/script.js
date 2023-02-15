document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var kreni = document.getElementById("kreni");
    var vrijeme = document.getElementById("vrijeme");
    var pitanje = document.getElementById("pitanje");
    var odgovor = document.getElementById("odgovor");
    var odgovori = document.getElementById("odgovori");
    var input = document.getElementById("input");
    var animacija;
    var br = 0;

    function brojac() {
        br += 1;
        vrijeme.innerHTML = br + "s";
    }

    kreni.addEventListener("click", function () {
        pitanje.innerText = "Koliko je 3 * 3?";
        animacija = setInterval(brojac, 1000);
        this.style.display = "none";
    });

    function inputOdgovor() {
        var unos = input.value;
        if (unos === "9") {
            odgovor.innerText = `Bravo, odgovor je tocan.. Odgovorili ste u ${br} sekundi`;
            clearInterval(animacija);
        } else {
            odgovor.innerText = "Odgovor nije tocan, pokusajte ponovo";
        }
    }

    odgovori.addEventListener("click", inputOdgovor);
});