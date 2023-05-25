"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../src/functions");
var foods_1 = __importDefault(require("./fixtures/foods"));
var drinks_1 = __importDefault(require("./fixtures/drinks"));
describe('03 - Função first', function () {
    it('A função first devolve o primeiro elemento de um array de strings', function () {
        var arrString = ['a', 'b', 'c'];
        var firstElement = (0, functions_1.first)(arrString);
        expect(firstElement).toBe(arrString[0]);
    });
    it('A função first devolve o primeiro elemento de um array de números', function () {
        var arrNumber = [1, 2, 3];
        var firstElement = (0, functions_1.first)(arrNumber);
        expect(firstElement).toBe(arrNumber[0]);
    });
    it('A função first devolve o primeiro elemento de um array de comidas', function () {
        var firstElement = (0, functions_1.first)(foods_1.default);
        expect(firstElement).toBe(foods_1.default[0]);
        expect(firstElement.name).toBe(foods_1.default[0].name);
        expect(firstElement.price).toBe(foods_1.default[0].price);
        expect(firstElement.weight).toBe(foods_1.default[0].weight);
        expect(firstElement.weightUnit).toBe(foods_1.default[0].weightUnit);
    });
    it('A função first devolve o primeiro elemento de um array de bebidas', function () {
        var firstElement = (0, functions_1.first)(drinks_1.default);
        expect(firstElement).toBe(drinks_1.default[0]);
        expect(firstElement.name).toBe(drinks_1.default[0].name);
        expect(firstElement.price).toBe(drinks_1.default[0].price);
        expect(firstElement.capacity).toBe(drinks_1.default[0].capacity);
        expect(firstElement.capacityUnit).toBe(drinks_1.default[0].capacityUnit);
    });
    it('A função first devolve undefined quando o array é vazio', function () {
        var firstElement = (0, functions_1.first)([]);
        expect(firstElement).toBe(undefined);
    });
    ;
});
