function crtez() {
    // linija
    var c1 = document.getElementById("platno1");
    var ctx1 = c1.getContext("2d");

    ctx1.beginPath();
    ctx1.moveTo(30, 180);
    ctx1.lineTo(460, 30);
    ctx1.lineWidth = 8;
    ctx1.strokeStyle = "#FF0000";
    ctx1.stroke();

    // kvadrat
    var c2 = document.getElementById("platno2");
    var ctx2 = c2.getContext("2d");

    ctx2.beginPath();
    ctx2.rect(20, 20, 150, 150);
    ctx2.fillStyle = "blue";
    ctx2.fill();
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 3;
    ctx2.stroke();

    // krug
    var c3 = document.getElementById("platno3");
    var ctx3 = c3.getContext("2d");

    var centerX = c3.width / 2;
    var centerY = c3.height / 2;
    var radius = 80;
    
    ctx3.beginPath();
    ctx3.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx3.fillStyle = "red";
    ctx3.fill();
    ctx3.lineWidth = 3;
    ctx3.strokeStyle = "blue";
    ctx3.stroke();

    // Proizvoljni oblici
    var c4 = document.getElementById("platno4");
    var ctx4 = c4.getContext("2d");

    ctx4.beginPath();
    ctx4.moveTo(170, 80);
    ctx4.bezierCurveTo(130,100,130,150,230,150);
    ctx4.bezierCurveTo(250,180,320,180,340,150);
    ctx4.bezierCurveTo(420,150,420,120,390,100);
    ctx4.bezierCurveTo(430,40,370,30,340,50);
    ctx4.bezierCurveTo(320,5,250,20,250,50);
    ctx4.bezierCurveTo(200,5,150,20,170,80);
    ctx4.closePath();
    ctx4.lineWidth = 5;
    ctx4.strokeStyle = "blue";
    ctx4.stroke();

    // Tekst sa sjenom
    var c5 = document.getElementById("platno5");
    var ctx5 = c5.getContext("2d");

    ctx5.save();

    ctx5.shadowColor = "gray";
    ctx5.shadowBlur = 2;
    ctx5.shadowOffsetX = 3;
    ctx5.shadowOffsetY = 3;
    ctx5.font = "italic small-caps bold 40px 'Courier New'";
    ctx5.fillStyle = "orange";
    ctx5.fillText("Hello World", 70, 70);

    ctx5.restore();

    ctx5.font = "italic bold 30px 'Courier New'";
    ctx5.fillStyle = "blue";
    ctx5.fillText("Pozdrav svijete", 70, 120);

    // Gradient
    var c6 = document.getElementById("platno6");
    var ctx6 = c6.getContext("2d");

    ctx6.beginPath();
    var grd = ctx6.createLinearGradient(0, 0, 600, 0);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(0.5, "orange");
    grd.addColorStop(1, "red");

    ctx6.fillStyle = grd;
    ctx6.fillRect(0, 0, 600, 200);

    // Slika
    var c7 = document.getElementById("platno7");
    var ctx7 = c7.getContext("2d");

    ctx7.beginPath();
    var slika = new Image();
    slika.src = "slike/algebra-logo.jpg"

    slika.onload = function() {
        ctx7.drawImage(slika, 10, 50, 140, 100);
    }

    ctx7.beginPath();
    ctx7.shadowColor = "gray";
    ctx7.shadowBlur = 2;
    ctx7.shadowOffsetX = 3;
    ctx7.shadowOffsetY = 3;
    ctx7.font = "italic small-caps bold 40px 'Courier New'";
    var grdText = ctx6.createLinearGradient(0, 0, 600, 0);
    grdText.addColorStop(0, "yellow");
    grdText.addColorStop(0.5, "orange");
    grdText.addColorStop(1, "red");
    ctx7.fillStyle = grdText;
    ctx7.fillText("Sveuciliste Algebra", 160, 110);
}
