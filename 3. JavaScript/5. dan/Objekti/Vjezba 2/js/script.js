/* Objekt tipa Date */
document.write("<h3>Objekt tipa Date - rad s datumom i vremenom</h3>")
var datumVrijeme = new Date();
document.write("Trenutni datum i vrijeme: " + datumVrijeme);

var datumVrijemeJucer = new Date(2023, 0, 4, 10, 30, 10);
document.write("<br />Jucerasnji datum i vrijeme: " + datumVrijemeJucer);

document.write("<br />Trenutni datum i vrijeme u lokaliziranom formatu: " + datumVrijeme.toLocaleString());

var dan = datumVrijeme.getDate();
var mjesec = datumVrijeme.getMonth() + 1;
var godina = datumVrijeme.getFullYear();

if(dan <= 9){
    dan = "0" + dan;
}

if(mjesec <= 9){
    mjesec = "0" + mjesec;
}

var noviFormat = dan + "/" + mjesec + "/" + godina;
document.write("<br />Trenutni datum u zadanom formatu: " + noviFormat);

/* Objekt tipa Math */
document.write("<h3>Objekt tipa Math - matematicke operacije</h3>");
document.write("Drugi korijen broja 16.44 prethodno zakoruzen na cijeli: " + Math.sqrt(Math.round(16.44)));

var slucajnaVrijednost = Math.floor(Math.random() * 10 + 1);
document.write("<br />Slucajna vrijednost: " + slucajnaVrijednost);

/* Number */
document.write("<h3>Number - rad sa numerickim vrijednostima</h3>");
var broj = 16.371;
document.write("Broj " + broj + " zakoruzen na jednu decimalu: " + broj.toFixed(1));

/* Objekt tipa RegExp */
document.write("<h3>Objekt tipa RegExp - uzorci znakovnih nizova</h3>");
var imePrezime = "Saša Čeko";

var uzorakZnakova = /[čćžšđ]/ig;

if(imePrezime.search(uzorakZnakova) != -1){
    document.write("Ime i prezime sadrzi posebne znakove");
} else {
    document.write("Ime i prezime ne sadrzi posebne znakove");
}

document.write("<br />Posebni znakovi u imenu i prezimenu: " + imePrezime.match(uzorakZnakova));
