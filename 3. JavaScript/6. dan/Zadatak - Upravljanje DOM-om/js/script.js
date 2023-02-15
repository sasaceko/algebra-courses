document.addEventListener("DOMContentLoaded", function(){

    var gumbici = document.getElementsByTagName("button");
    var labels = document.getElementsByTagName("input");
    var forma = document.getElementsByTagName("form")[0];

    gumbici[0].addEventListener("click", function(){
        document.getElementsByTagName("h1")[0].style.color = "red";
    });

    gumbici[1].addEventListener("click", function(){
        var labels = document.getElementsByTagName("label");
        labels[0].classList.add("novi-stil-labela");
        labels[1].classList.add("novi-stil-labela");
    });

    gumbici[2].addEventListener("click", function(){
        labels[0].classList.add("novi-stil-polja");
        labels[1].classList.add("novi-stil-polja");
    });

    gumbici[3].addEventListener("click", function(){
        console.log(forma.getAttribute("method"));
    });

    gumbici[4].addEventListener("click", function(){
        labels[0].value = "korIme";
        labels[1].value = "lozinka";
    });

    gumbici[5].addEventListener("click", function(){
        if(!labels[0].value || !labels[1].value) {
        alert("unesite vrijednost");
        } else
        alert(labels[0].value + ' ' + labels[1].value);
    });

    gumbici[6].addEventListener("click", function(){
        var noviElement = document.createElement("input");
        noviElement.setAttribute("type", "submit");
        noviElement.setAttribute("value", "Uredu");
        noviElement.setAttribute("id", "gumbic");
        forma.appendChild(noviElement);
    });
})