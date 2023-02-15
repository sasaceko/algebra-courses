var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
var myFunction = function(e) {
    var rijec = "";
    for( i = 0; i < e.length; i++) {
        if (e[0].length > rijec.length) {
            rijec = rijeci[i];
        }
    }
    return rijec;
}

console.log(myFunction(rijeci));