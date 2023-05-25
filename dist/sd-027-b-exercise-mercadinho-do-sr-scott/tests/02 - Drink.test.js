"use strict";
describe('02 - Type Drink', function () {
    it('O type Drink existe', function () {
        expect('Drink.exists').toCompile();
    });
    it('O type Drink deve ter o atributo name', function () {
        expect('Drink.without_name').notToCompile();
    });
    it('O type Drink deve ter o atributo price', function () {
        expect('Drink.without_price').notToCompile();
    });
    it('O type Drink deve ter o atributo capacity', function () {
        expect('Drink.without_capacity').notToCompile();
    });
    it('O type Drink deve ter o atributo capacityUnit', function () {
        expect('Drink.without_capacity_unit').notToCompile();
    });
    it('O type Drink deve ter os atributos name, price, capacity, capacityUnit', function () {
        expect('Drink.valid').toCompile();
    });
});
