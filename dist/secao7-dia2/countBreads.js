"use strict";
function countBreads(breads) {
    return breads.length;
}
var myBreads = ['Pão de Sal', 'Pão de Centeio', 'Pão de banana'];
console.log(countBreads(myBreads));
function countBreads2(breads) {
    return breads.length;
}
var paoDeSal = {
    name: 'Pão de sal',
    allergens: ['Gluten'],
};
var paoDoce = {
    name: 'Pão doce',
    allergens: ['Gluten'],
};
var myBreads2 = [paoDeSal, paoDoce];
// Erro de tipagem! "Argument of type 'CommonBread[]' is not assignable to parameter of type 'string[]'. Type 'CommonBread' is not assignable to type 'string'"
console.log(countBreads2(myBreads2));
