"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _04_calculateTotalPrice_1 = __importDefault(require("../src/04-calculateTotalPrice"));
describe('04 - calculateTotalPrice deve retornar', function () {
    var shirt = {
        id: 1,
        name: 'Camiseta',
        price: 29.9,
        quantity: 2,
        brands: ['Nike', 'Reebok'],
    };
    var chosenItem = [{
            product: shirt,
            quantity: 3,
            phrase: 'May the 4th be with you',
            brand: 'Nike'
        }];
    it('o preço total do tipo número', function () {
        var result = (0, _04_calculateTotalPrice_1.default)(chosenItem);
        expect(typeof result).toBe('number');
    });
    it('o preço total corretamente com um item', function () {
        var result = (0, _04_calculateTotalPrice_1.default)(chosenItem);
        expect(result).toEqual(89.7);
    });
    it('o preço total corretamente com múltiplos items', function () {
        var mug = {
            id: 2,
            name: 'Caneca',
            price: 19.90,
            quantity: 10,
            brands: ['Stanley', 'Camelbak'],
        };
        var multipleChosenItems = [{
                product: shirt,
                quantity: 3,
                phrase: 'May the 4th be with you',
                brand: 'Nike'
            }, {
                product: mug,
                quantity: 2,
                phrase: 'No Coffee, No Forcee',
                brand: 'Stanley'
            }];
        var result = (0, _04_calculateTotalPrice_1.default)(multipleChosenItems);
        expect(result).toEqual(129.5);
    });
    it('o valor de 0 com os items do array vazio', function () {
        var noneItems = [];
        var result = (0, _04_calculateTotalPrice_1.default)(noneItems);
        expect(result).toEqual(0);
    });
});
