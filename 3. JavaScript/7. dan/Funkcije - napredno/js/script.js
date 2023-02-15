// var brojac = 0;

// function dodaj(){
//     var brojac = 0;
//     brojac += 1;
//     return brojac;
// }

// closure: omogucuje definiciju privatnih varijabli funkcija
var dodaj = (function(){
    var brojac = 0;
    return function(){
        brojac += 1;
        return brojac;
    }
})();

document.write("<br />Vrijednost brojača: " + dodaj());
document.write("<br />Vrijednost brojača: " + dodaj());
document.write("<br />Vrijednost brojača: " + dodaj());

function vratiNesto(x) {
    return function() {
    return x;
    
    };
    }
    var y = vratiNesto(true)();

console.log(y);