document.addEventListener("DOMContentLoaded", function(){
    // primjer 1
    anime({
        targets: "#zeleni-kvadrat",
        translateX: 100,
        borderRadius: 50,
        backgroundColor: "#FF0000",
        duration: 2000,
        easing: "linear",
        direction: "alternate"
    });

    // primjer 2
    var roditeljKugla = anime({
        targets: "#roditelj-kugla",
        rotate: [60, -60],
        duration: 3000,
        autoplay: false,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
    });

    var gumbici = document.getElementsByTagName("button");
    gumbici[0].addEventListener("click", roditeljKugla.play);
    gumbici[1].addEventListener("click", roditeljKugla.pause);

    // primjer 3
    var napredak = document.querySelector("#napredak");
    var baterija = {
        postotak: "0%"
    };
    var ikona = anime({
        targets: ".segment",
        width: 20,
        duration: 300,
        delay: anime.stagger(500),
        endDelay: 500,
        easing: "linear",
        loop: true
    });
    anime({
        targets: baterija,
        postotak: "100%",
        duration: 1500,
        easing: "linear",
        round: 1,
        update: function(){
            napredak.innerHTML = baterija.postotak;
        },
        complete: function(){
            ikona.pause();
            ikona.seek(ikona.duration);
        }
    });

    //primjer 4
    var kutija = document.getElementById("kutija");
    anime({
        targets: "#sadrzaj",
        translateY: [
            {value: 50, duration: 500},
            {value: 0, duration: 500, delay: 1500},  
            {value: -53, duration: 500, delay: 500},
            {value: 0, duration: 500, delay: 2500},
            {value: 50, duration: 500, delay: 500},
            {value: 0, duration: 500, delay: 1500}
        ],
        translateX: [
            {value: 53, duration: 500, delay: 1000},
            {value: 0, duration: 500, delay: 2500},
            {value: -53, duration: 500, delay: 500},
            {value: 0, duration: 500, delay: 2500}
        ],
        easing: "linear",
        begin: function(){
            kutija.style.borderBottom = "none";
        },
        complete: function(){
            kutija.style.borderBottom = "solid darkorange 3px";
        },
    });

    // primjer 5
    var lopte = anime.timeline({
        duration: 1000,
        easing: "easeInOutSine",
        loop: true
    });
    lopte.add({
        targets: ".prva",
        keyframes: [
            {translateY: -50, backgroundColor: "rgb(255, 0, 0)"},
            {translateY: 0, backgroundColor: "rgb(128, 128, 128)"}
        ],
    }).add({
        targets: ".druga",
        keyframes: [
            {translateY: -50, backgroundColor: "rgb(0, 255, 0)"},
            {translateY: 0, backgroundColor: "rgb(128, 128, 128)"}
        ],
    }, "-=900").add({
        targets: ".treca",
        keyframes: [
            {translateY: -50, backgroundColor: "rgb(0, 0, 255)"},
            {translateY: 0, backgroundColor: "rgb(128, 128, 128)"}
        ],
    }, "-=800");
});