// definicija bazne klase
class Osoba{
    constructor(imePrezime, adresa, datumRodenja){
        this.imePrezime = imePrezime;
        this.adresa = adresa;
        this.datumRodenja = datumRodenja;
    }

    ispisOpcihPodataka(){
        document.write("Opci podaci: " + this.imePrezime + ", " + this.adresa + ', ' + this.datumRodenja + '.<br />');
    }
}

// definicija nasljedenih/izvedenih klasa

class Ucenik extends Osoba{
    constructor(imePrezime, adresa, datumRodenja, ocjena1, ocjena2, ocjena3){
        super(imePrezime, adresa, datumRodenja);
        this.ocjena1 = ocjena1;
        this.ocjena2 = ocjena2;
        this.ocjena3 = ocjena3;
    }

    izracunProsjeka(){
        return (this.ocjena1 + this.ocjena2 + this.ocjena3) / 3;
    }
}

class Nastavnik extends Osoba{
    constructor(imePrezime, adresa, datumRodenja, koeficijent, osnovica){
        super(imePrezime, adresa, datumRodenja);
        this.koeficijent = koeficijent;
        this.osnovica = osnovica;
    }

    izracunPlace(){
        return this.osnovica * this.koeficijent;
    }
}

// kreiranje objekta
var pero = new Ucenik('Pero Peric', 'Adresa 1', '01.01.2000', 5, 4, 3);
var tomo = new Nastavnik('Tomo Tomic', 'Adresa 2', '01.01.1980', 1.9, 5000);

pero.ispisOpcihPodataka();
tomo.ispisOpcihPodataka();

document.write("Prosjek ucenika " + pero.imePrezime + " iznosi " + pero.izracunProsjeka() + ".<br />");
document.write("Placa nastavnika " + tomo.imePrezime  +" iznosi " + tomo.izracunPlace() + ".<br />");