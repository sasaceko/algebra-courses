document.write("<h3>Objekt tipa Date - rad s datumom i vremenom</h3>");
var datumVrijeme = new Date();
document.write("Trenutni datum i vrijeme: " + datumVrijeme);
var dan = datumVrijeme.getDate();
var mjesec = datumVrijeme.getMonth() + 1;
var godina = datumVrijeme.getFullYear();

if(dan <= 9){
    dan = dan;
}

if(mjesec <= 9){
    mjesec = mjesec;
}

var noviFormat = mjesec + "/" + dan + "/" + godina;
document.write("<br />Trenutni datum: " + noviFormat);
document.write("<br />Vrijednost godine: " + godina);
godina = datumVrijeme.setFullYear(2000);
document.write("<br />Datum i vrijeme s novom vrijednoscu godine: " + datumVrijeme);

document.write("<h3>Objekt tipa Math - matematicke operacije</h3>");

var broj = 6;
var polumjer = Math.pow(broj, 2) * Math.PI;
document.write("<br />Povrsina kruga polumjera 6 iznosi: " + polumjer.toFixed(2));

document.write("<h3>Objekt tipa RegExp - uzorci znakovnih nizova</h3>");

var korisnickoIme = "pero123";
var uzorakZnakova = /[0-9]/g;

if(korisnickoIme.search(uzorakZnakova) != -1){
    document.write("Korisnicko ime " + korisnickoIme + " sadrzi numericke vrijednosti!");
} else {
    document.write("Korisnicko ime " + korisnickoIme + " ne sadrzi numericke vrijednosti!");
}

document.write("<br />Znakovni niz bez numerickih vrijednosti: " + korisnickoIme.replace(uzorakZnakova, "%"));




