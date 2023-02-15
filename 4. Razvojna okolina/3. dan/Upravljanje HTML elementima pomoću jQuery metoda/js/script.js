$(document).ready(function() {
    //Dohvaćanje sadržaja i vrijednosti atributa - text(), html(), val(), attr()
    var sekcija1Btn = $("#sekcija1 button");

    sekcija1Btn.eq(0).click(function() {
        var sadrzaj = $("#sekcija1 label").text();
        alert("Sadrzaj elementa <label>: " + sadrzaj);
    });

    sekcija1Btn.eq(1).click(function() {
        var sadrzaj = $("#sekcija1 label").html();
        alert("Sadrzaj + HTML elementa <label>: " + sadrzaj);
    });

    sekcija1Btn.eq(2).click(function() {
        var sadrzaj = $("#sekcija1 textarea").val();
        if (sadrzaj.trim() === "") {
            alert("Polje je prazno, upisite nesto.");
        } else {
            alert("Vrijednost polja <textarea> : " + sadrzaj);
        }
    });

    sekcija1Btn.eq(3).click(function() {
        var sadrzaj = $("#sekcija1 input").attr("type");
        alert("Vrijdnost atributa type elementa <input>: " + sadrzaj);
    });


    //Postavljanje sadržaja i vrijednosti atributa - text(), html(), val(), attr()
    var sekcija2Btn = $("#sekcija2 button");
    
    sekcija2Btn.eq(0).click(function() {
        $("#sekcija2 label").text("Novi text");
    });

    sekcija2Btn.eq(1).click(function() {
        $("#sekcija2 label").html("<i>Novi text + HTML</i>")
    });

    sekcija2Btn.eq(2).click(function() {
        $("#sekcija2 textarea").val("Novi text");
    });

    sekcija2Btn.eq(3).click(function() {
        $("#sekcija2 textarea").attr({"rows": "10", "cols": "30"});
    });


    // Dodavanje novog sadržaja ili HTML elemenata - prepend(), append(), before(), after()
    var sekcija3Btn = $("#sekcija3 button");

    sekcija3Btn.eq(0).click(function() {
        $("#sekcija3 label").prepend("Novi text na pocetku");
    });

    sekcija3Btn.eq(1).click(function() {
        $("#sekcija3 label").append("Novi text na kraju")
    });

    sekcija3Btn.eq(2).click(function() {
        $("#sekcija3 input").before("<button>Novi element prije</button>");
    });

    sekcija3Btn.eq(3).click(function() {
        $("#sekcija3 input").after("<button>Novi element iza</button>");

    });


    //Uklanjanje sadržaja ili HTML elemenata - remove(), empty()
    sekcija4Btn = $("#sekcija4 button");

    sekcija4Btn.eq(0).click(function() {
        $("#obrazac1").remove();
    });

    sekcija4Btn.eq(1).click(function() {
        $("#obrazac2").empty();
    });


    //Promjena stilova preko klase - addClass(), removeClass(), toggleClass()
    sekcija5Btn = $("#sekcija5 button");
    obrazac5 = $("#sekcija5 form");

    sekcija5Btn.eq(0).click(function() {
        obrazac5.addClass("nova-pozadina");
    });

    sekcija5Btn.eq(1).click(function() {
        obrazac5.removeClass("nova-pozadina");
    });

    sekcija5Btn.eq(2).click(function() {
        obrazac5.toggleClass("nova-pozadina");
    });


    //Promjena stilova preko atributa style - css()
    sekcija6Btn = $("#sekcija6 button");
    obrazac6 = $("#sekcija6 form");

    sekcija6Btn.eq(0).click(function(){
        obrazac6.css("background-color", "red");
    });

    sekcija6Btn.eq(1).click(function(){
        obrazac6.css({"background-color": "blue", "color": "white"});
    });
});