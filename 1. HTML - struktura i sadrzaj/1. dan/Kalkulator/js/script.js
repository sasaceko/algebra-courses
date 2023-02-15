document.addEventListener("DOMContentLoaded", function(){

    var gumbici = document.querySelectorAll("button:not(#jednako):not(#brisi)");
    var jednako = document.getElementById("jednako");
    var brisi = document.getElementById("brisi");
    var prikaz = document.getElementById("prikaz");

    gumbici.forEach(function(gumb){
        gumb.addEventListener("click", function(){
            prikaz.value += this.value;
        });
    });

    jednako.addEventListener("click", function(){
        var rezultat = eval(prikaz.value);
        prikaz.value = rezultat;
    });

    brisi.addEventListener('click', function(){
        prikaz.value = "";
    });
});