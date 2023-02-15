$(document).ready(function() {
var zaglavlje = $(".zaglavlje");
var podnozje = $(".podnozje");
console.log(zaglavlje)
zaglavlje.eq(0).click(function() {
    podnozje.eq(0).animate({ display: "block" }, 0, function() {
        podnozje.eq(0).slideToggle();
    });
})

zaglavlje.eq(1).click(function() {
    podnozje.eq(1).animate({ display: "block" }, 0, function() {
        podnozje.eq(1).slideToggle();
    });
})

zaglavlje.eq(2).click(function() {
    podnozje.eq(2).animate({ display: "block" }, 0, function() {
        podnozje.eq(2).slideToggle();
    });
})
})