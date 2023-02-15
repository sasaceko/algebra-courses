const mojeFunkcije = require("../script");

test("1 + 2 jednako 3", () => {
    expect(mojeFunkcije.zbroj(1, 2)).toEqual(3);
});


var a = {}, b = {};
test("Isti objekt", () => {
    expect(mojeFunkcije.istiObjekt(a, b)).toBe(false);
});


test("Isti objekt - negacija", () => {
    expect(mojeFunkcije.istiObjekt(a, b)).not.toBe(true);
});


test("Je li null", () => {
    expect(mojeFunkcije.jeLiNull(null)).toBeNull();
});


test("Je li undefined", () => {
    expect(mojeFunkcije.jeLiUndefined(undefined)).toBeUndefined();
});


var znakovniNiz = "Pero Perić";
var uzorakZnakova = /[đšžćč]/ig;
test("Usporedba uzoraka znakova", () => {
    expect(znakovniNiz).toMatch(uzorakZnakova);
});


test("Usporedba brojeva", () => {
    expect(mojeFunkcije.zbroj(0.1, 0.2)).toBeCloseTo(0.3);
});

var niz = [1, 2, 3, 4, 5];
test("Je li u nizu", () => {
    expect(niz).toContain(1);
});