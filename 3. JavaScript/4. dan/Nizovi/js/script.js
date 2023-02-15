var polaznici = ["Pero", "Ana", "Ivo"];

document.write("Duljina niza: " + polaznici.length);
document.write("<br />Prvi element: " + polaznici[0]);
document.write("<br />Svi elementi niza: " );
for(let i = 0; i < polaznici.length; i++) {
    document.write(polaznici[i] + " ");
}

/*
for (let i of polaznici) {
    document.write(i + " ");
}

for (let i in polaznici) {
    document.write(polaznici[i] + " ");
}
*/

var izbaciElement = polaznici.pop();
document.write("<br /> Izbačeni element: " + izbaciElement);
document.write("<br /> Duljina niza: " + polaznici.length);

polaznici.push('Mirko', 'Tomo');
document.write("<br />Svi elementi niza: " );
for(let i = 0; i < polaznici.length; i++) {
    document.write(polaznici[i] + " ");
}

polaznici.splice(1, 1, "Martina", "Maja");
document.write("<br />Svi elementi niza: " );
for(let i = 0; i < polaznici.length; i++) {
    document.write(polaznici[i] + " ");
}

document.write("<br />Novi popis elemenata niza, sortiran uzlazno po abecedi: " + polaznici.sort());

var brojevi = [9, 16, 25, 36];
var korijenBrojeva = brojevi.map(Math.sqrt);

document.write("<br />Korijen brojeva: ");
korijenBrojeva.forEach(function(broj){
    document.write(broj + "  ");
});
