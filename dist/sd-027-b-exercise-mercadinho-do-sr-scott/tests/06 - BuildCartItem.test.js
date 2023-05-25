"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../src/functions");
describe('06 - Função buildCartItem', function () {
    it('A função buildCartItem retorna um objeto do tipo CartItem ao receber um objeto do tipo Food e uma quantidade', function () {
        var hamburger = {
            name: "Hamburger",
            price: 10.99,
            weight: 200,
            weightUnit: 'g',
        };
        var quantity = 10;
        var item = (0, functions_1.buildCartItem)(hamburger, quantity);
        expect(item.name).toBe(hamburger.name);
        expect(item.price).toBe(hamburger.price);
        expect(item.quantity).toBe(quantity);
        expect(Object.keys(item)).not.toContain('weight');
        expect(Object.keys(item)).not.toContain('weightUnit');
    });
    it('A função buildCartItem retorna um objeto do tipo CartItem ao receber um objeto do tipo Drink e uma quantidade', function () {
        var coke = {
            name: "Coca-cola lata",
            price: 3.50,
            capacity: 300,
            capacityUnit: 'ml'
        };
        var quantity = 10;
        var item = (0, functions_1.buildCartItem)(coke, quantity);
        expect(item.name).toBe(coke.name);
        expect(item.price).toBe(coke.price);
        expect(item.quantity).toBe(quantity);
        expect(Object.keys(item)).not.toContain('capacity');
        expect(Object.keys(item)).not.toContain('capacityUnit');
    });
});
