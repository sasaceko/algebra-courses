function crtez() {
    var c2 = document.getElementById("platno");
    var ctx2 = c2.getContext("2d");

    ctx2.beginPath();
    ctx2.rect(4, 4, 492, 352);
    ctx2.fillStyle = "#f5aa42";
    ctx2.fill();

    ctx2.beginPath();
    ctx2.rect(175, 25, 150, 150);
    ctx2.strokeStyle = "white";
    ctx2.lineWidth = 10;
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.arc(250, 70, 15, 0, 2*Math.PI);
    ctx2.fillStyle = "white";
    ctx2.fill();

    ctx2.beginPath();
    ctx2.moveTo(200, 140);
    ctx2.lineTo(300, 140);
    ctx2.lineWidth = 8;
    ctx2.strokeStyle = "white";
    ctx2.stroke();

    ctx2.font = "bold 50px 'Courier New'";
    ctx2.fillStyle = "white";
    ctx2.fillText("ALGEBRA", 140, 220);

    ctx2.beginPath();
    ctx2.moveTo(140, 240);
    ctx2.lineTo(350, 240);
    ctx2.lineWidth = 8;
    ctx2.strokeStyle = "white";
    ctx2.stroke();

    ctx2.font = "bold 25px 'Courier New'";
    ctx2.fillStyle = "white";
    ctx2.fillText("U Č I L I Š T E", 140, 270);
}