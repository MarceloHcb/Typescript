"use strict";
var firstName = "Joel";
var age = 38;
var brazilian = false;
function greet(name) {
    console.log("Ol\u00E1, ".concat(name.toUpperCase(), "!"));
}
console.log(greet('abc'));
function getFavoriteNumber() {
    return 26;
}
console.log(getFavoriteNumber());
var sum = function (a, b) { return a + b; };
sum(1, '2');
function printPersonalInfo2(data) {
    console.log("".concat(data.name, " was born in ").concat(data.birthYear, "."));
}
printPersonalInfo2({ name: 'Rogerinho', birthYear: 1978 });
var evenNumbers = [2, 4, 6];
var vowel = ['a', 'e', 'i', 'o', 'u'];
var booleanValues = [true, false];
evenNumbers.push(8); // Funciona
evenNumbers.push('8'); // Erro
var role = 10;
role = 'kdfnlg';
role = [];
role = {};
role.toUpperCase();
// if(typeof role === 'string'){
//     role.toUpperCase()
// }
var ages = 10;
ages = 'jksdf';
ages = true;
ages = [];
if (typeof ages === 'string') {
    ages.toUpperCase();
}
// ages.toUpperCase()
var greets = function (name) {
    console.log('hello', name);
    return name;
};
console.log(greets('mclo'));
// interrogação não funciona fora do objeto
var address = null;
var user = {
    name: 'kjhk',
    age: 2,
};
var gr = '';
var abc = 'undefined';
function test(a) {
    a.toLowerCase();
}
test(abc);
