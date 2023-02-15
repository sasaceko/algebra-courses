document.addEventListener("DOMContentLoaded", () => {
    var kvadrat1 = document.getElementById("kvadrat1");
    kvadrat1.addEventListener("click", () => {
        var pozicija = 0;
        var nijansa = 0;
        var stupnjevi = 0;
        var intervalId = setInterval(animacija, 10);
        function animacija(){
            if(pozicija == 360){
                clearInterval(intervalId);
            }
            
            else {
                pozicija++;
                kvadrat1.style.top = pozicija + "px";
                kvadrat1.style.left = pozicija + "px";
                nijansa++;
                stupnjevi++;
                var boja = "hsl(" + nijansa + ", 100%, 50%)";
                kvadrat1.style.backgroundColor = boja;
                kvadrat1.style.transform = "rotate(" + stupnjevi + "deg)";
            }
        }
    })

    var kvadrat2 = document.getElementById("kvadrat2");
    kvadrat2.addEventListener("click", () => {
        var pozicija = 0;
        setInterval(animacija2, 1000);
        function animacija2(){
            pozicija1 = Math.floor(Math.random() * 360);
            pozicija2 = Math.floor(Math.random() * 360);
            kvadrat2.style.top = pozicija1 + "px";
            kvadrat2.style.left = pozicija2 + "px";
        }
    })
});