// template literals

const ime = "Ivan";
const pozdrav = `Moje ime je ${ime}`
console.log(pozdrav);

// Spread operator 

function ispisImena(prvo, drugo, trece) {
    console.log(drugo);
}

const x = ["Ivan", "Pero", "Tomo"];
ispisImena(...x);

const korisnik = {
    imePrezime: "Pero Peric",
    adresa: "Neka adresa",
    godinaRodenja: 2000
}

const { imePrezime, adresa, godinaRodenja } = korisnik;
console.log(imePrezime);

const brojevi = [2, 3, 4, 5, 6];
[a, b, ...rest] = brojevi;
console.log(rest);

// Rest operator

function vratiZbroj(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

console.log(vratiZbroj(2, 1));
