function nazivFunkcije1() {
    var value = 1;
    return value;
}

console.log(nazivFunkcije1());
console.log(nazivFunkcije1());

function nazivFunkcije1() {
    var value = 1;
    return value;
    value += 1;
}

console.log(nazivFunkcije1());

// parametri i argumenti

function udaljenostKoordinata(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    console.log(Math.sqrt(dx*dx + dy*dy));
}

udaljenostKoordinata(1, 2, 5, 5);
udaljenostKoordinata(2, 2, 3, 4);

function myFunc1(a, b){
    if( b === undefined) {
        b = 1;
    }
    return a + b;
}

console.log(myFunc1(4, 6));

function myFunc2(a, b) {
    if (!b) {
    b = 1;
    }
    return a + b;
    
}

console.log(myFunc2(4));

function myFunc3(a, b) {
    b = b || 1;
    return a + b;
    
}

console.log(myFunc2(2, 4));

function myFunc3(a, b = 1) {
    return a + b;
    
}
 
console.log(myFunc3(2, 4));

//funkcija kao vrijednost
var addOne = function(value) {
    return value + 1;
}

var myVar = addOne(3);

console.log(myVar);
