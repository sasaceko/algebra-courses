$(document).ready(function() {
    var gumbici = $("button");

    gumbici.eq(0).click(function() {
        $("h1").css({"color": "red", "font-size": "32px", "font-weight": "bold"})
    });

    gumbici.eq(1).click(function() {
        $("label").addClass("novi-stil-labela");
    });

    gumbici.eq(2).click(function() {
        $("input[type='text'], input[type='password']").addClass("novi-stil-polje");
    });

    gumbici.eq(3).click(function() {
        alert($("form").attr("action"));
    });

    gumbici.eq(4).click(function() {
        $("input[type='text']").val("Pero");
        $("input[type='password']").val("123");
    });

    gumbici.eq(5).click(function() {
        sadrzajText = $("input[type='text']").val();
        sadrzajPass = $("input[type='password']").val();
        if( (sadrzajText || sadrzajPass) === "") {
            alert("Upisite vrijednosti u oba inputa")
        } else{
            alert(
                sadrzajText + sadrzajPass
            )
        }
    });

    gumbici.eq(6).click(function() {
        $("form").append("<input type='submit' value='U redu'/>")
        $("input[type='submit']").attr("id", "gumbic");
    });
});