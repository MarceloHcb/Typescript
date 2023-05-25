"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../src/functions");
var foods_1 = __importDefault(require("./fixtures/foods"));
var drinks_1 = __importDefault(require("./fixtures/drinks"));
describe('04 - Função updateItem', function () {
    it('A função updateItem é capaz de atualizar um array de numbers', function () {
        var arrNumber = [1, 2, 3];
        var index = 1;
        var updatedValue = 5000;
        var updateArr = (0, functions_1.updateItem)(arrNumber, index, updatedValue);
        expect(updateArr[1]).toBe(updatedValue);
    });
    it('A função updateItem altera o elemento e retorna o array de strings atualizado', function () {
        var arrString = ['a', 'b', 'c'];
        var index = 2;
        var updatedValue = 'updated';
        var updateArr = (0, functions_1.updateItem)(arrString, index, updatedValue);
        expect(updateArr[2]).toBe(updatedValue);
    });
    it('A função updateItem é capaz de atualizar um array de comidas', function () {
        var index = 1;
        var updatedFood = {
            name: "Pizza Grande",
            price: 80,
            weight: 200,
            weightUnit: 'g'
        };
        var updateArr = (0, functions_1.updateItem)(foods_1.default, index, updatedFood);
        expect(updateArr[index].name).toBe(updatedFood.name);
        expect(updateArr[index].price).toBe(updatedFood.price);
        expect(updateArr[index].weight).toBe(updatedFood.weight);
        expect(updateArr[index].weightUnit).toBe(updatedFood.weightUnit);
    });
    it('A função updateItem é capaz de atualizar um array de bebidas', function () {
        var index = 0;
        var updatedDrink = {
            name: "Coca-cola 2l",
            price: 10.0,
            capacity: 2,
            capacityUnit: 'l'
        };
        var updateArr = (0, functions_1.updateItem)(drinks_1.default, 0, updatedDrink);
        expect(updateArr[index].name).toBe(updatedDrink.name);
        expect(updateArr[index].price).toBe(updatedDrink.price);
        expect(updateArr[index].capacity).toBe(updatedDrink.capacity);
        expect(updateArr[index].capacityUnit).toBe(updatedDrink.capacityUnit);
    });
    it('A função updateItem não altera o array ao receber um índice que não existe', function () {
        var arrString = ['a', 'b', 'c'];
        var index = 5;
        var updatedValue = 'updated';
        var updateArr = (0, functions_1.updateItem)(arrString, index, updatedValue);
        expect(updateArr).toBe(arrString);
    });
});
