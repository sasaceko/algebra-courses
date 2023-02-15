(function(){
    "use strict";
    
    function Todo(){
        const polje = document.querySelector("input"), 
        gumbicDodaj = document.querySelector("button"),
        lista = document.querySelector("ul");

        function oznaciObavljenim(event){
            var gumbicOznaci = event.target;
            gumbicOznaci.parentNode.classList.toggle("obavljeno");
        }

        function ukloniStavku(event){
            var gumbicUkloni = event.target;
            gumbicUkloni.parentNode.remove();
            polje.focus();
        }

        function dodajGumbicUkloni(stavka){
            var gumbicUkloni = document.createElement("div");
            gumbicUkloni.className = "gumbic-ukloni";
            gumbicUkloni.addEventListener("click", ukloniStavku);
            stavka.appendChild(gumbicUkloni);
        }

        function dodajGumbicOznaci(stavka){
            var gumbicOznaci = document.createElement("input");
            gumbicOznaci.setAttribute("type", "checkbox");
            gumbicOznaci.addEventListener("click", oznaciObavljenim);
            stavka.insertBefore(gumbicOznaci, stavka.firstChild);
        }

        function kreirajStavku(text){
            var stavka = document.createElement("li");
            stavka.innerText = text;
            dodajGumbicUkloni(stavka);
            dodajGumbicOznaci(stavka);
            return stavka;
        }

        function dodajStavku(){
            var text = polje.value.trim();
            if(text != ""){
                var stavka = kreirajStavku(text);
                lista.appendChild(stavka);
                polje.value = "";
                polje.focus();
            } else {
                alert("Upisite opis zadatka.");
                polje.focus();
            }
        }

        this.init = function(){
            gumbicDodaj.addEventListener("click", dodajStavku);
        }
    }

    var todo = new Todo();
    window.addEventListener("load", todo.init);
})();