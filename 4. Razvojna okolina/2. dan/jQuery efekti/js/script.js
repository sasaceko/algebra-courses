$(document).ready(function() {
    // Sakrivanje i prikazivanje HTML elemenata - hide(), show(), toggle()
    var sekcija1Btn = $("#sekcija1 button");
    var sekcija1 = $("#sekcija1 div");
    console.log(sekcija1Btn)
    sekcija1Btn.eq(0).click(function() {
        sekcija1.hide(1000);
    });

    sekcija1Btn.eq(1).click(function() {
        sekcija1.show("fast");
    });

    sekcija1Btn.eq(2).click(function() {
        sekcija1.toggle(2000, function() {console.log("Efekt je završio.")});
    });

    sekcija1Btn.eq(3).click(function() {
        sekcija1.hide("slow").show("slow");
    });


    //Postepeno sakrivanje i prikazivanje HTML elemenata - fadeOut(), fadeIn(), fadeToggle(), fadeTo()
    var sekcija2Btn = $("#sekcija2 button");
    var sekcija2 = $("#sekcija2 div");

    sekcija2Btn.eq(0).click(function() {
        sekcija2.fadeOut(1500);
    })

    sekcija2Btn.eq(1).click(function() {
        sekcija2.fadeIn("slow");
    });

    sekcija2Btn.eq(2).click(function() {
        sekcija2.fadeToggle("fast");
    });

    sekcija2Btn.eq(3).click(function() {
        sekcija2.fadeTo("slow", 0.3);
    });


    // Sakrivanje i prikazivanje HTML elemenata uz efekt klizanja - slideUp(), slideDown(), slideToggle()
    var sekcija3Btn = $("#sekcija3 button");
    var sekcija3 = $("#sekcija3 div");

    sekcija3Btn.eq(0).click(function() {
        sekcija3.slideUp("slow");
    });

    sekcija3Btn.eq(1).click(function() {
        sekcija3.slideDown(1500);
    });

    sekcija3Btn.eq(2).click(function() {
        sekcija3.slideToggle(1000);
    });


    // Animacije (postepena promjena više CSS stilova) - animate()
    var sekcija4 = $("#sekcija4 div");

    sekcija4.click(function() {
        var paragraf1 = $("#sekcija4 p").eq(0);
        var paragraf2 = $("#sekcija4 p").eq(1);
        
        sekcija4.animate({
            left: "50%",
            marginLeft: "-150px"
        }, 2000, function() {
            paragraf1.hide();
        }).animate({
            width: "300px",
            fontSize: "24px",
            color: "white",
            backgroundColor: "green"
        }, 2000, function() {
            paragraf2.show();
        });
    });


    // Zaustavljanje izvršavanja efekta prije nego što završi - stop()
    var sekcija5 = $("#sekcija5 div");
    var sekcija5Btn = $("#sekcija5 button");

    sekcija5.click(function() {
        var paragraf1 = $("#sekcija5 p").eq(0);
        var paragraf2 = $("#sekcija5 p").eq(1);
        
        sekcija5.animate({
            left: "50%",
            marginLeft: "-150px"
        }, 2000, function() {
            paragraf1.hide();
        }).animate({
            width: "300px",
            fontSize: "24px",
            color: "white",
            backgroundColor: "green"
        }, 2000, function() {
            paragraf2.show();
        });
    });

     sekcija5Btn.click(function() {
        sekcija5.stop(true);
     });
});