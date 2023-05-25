"use strict";
describe('01 - Type Food', function () {
    it('O type Food existe', function () {
        expect('Food.exists').toCompile();
    });
    it('O type Food deve ter o atributo name', function () {
        expect('Food.without_name').notToCompile();
    });
    it('O type Food deve ter o atributo price', function () {
        expect('Food.without_price').notToCompile();
    });
    it('O type Food deve ter o atributo weight', function () {
        expect('Food.without_weight').notToCompile();
    });
    it('O type Food deve ter o atributo weightUnit', function () {
        expect('Food.without_weight_unit').notToCompile();
    });
    it('O type Food deve ter os atributos name, price, weight, weightUnit', function () {
        expect('Food.valid').toCompile();
    });
});
