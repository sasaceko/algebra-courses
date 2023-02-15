function zbroj(a, b) {
    return a + b;
}

function istiObjekt(a, b) {
    return Object.is(a, b);
}

function jeLiNull(a){
    return a;
}

function jeLiUndefined(a){
    return a;
}

module.exports = { zbroj, istiObjekt, jeLiNull, jeLiUndefined };