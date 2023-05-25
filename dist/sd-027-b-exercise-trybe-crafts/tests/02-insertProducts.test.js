"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_insertProducts_1 = __importDefault(require("../src/02-insertProducts"));
describe('02 - insertProducts deve', function () {
    var brandsInStock = ['Nike', 'Reebok'];
    var productWithCorrectBrands = {
        id: 1,
        name: 'Camiseta',
        price: 29.90,
        quantity: 12,
        brands: ['Nike', 'Reebok'],
    };
    var productWithWrongBrands = {
        id: 1,
        name: 'Camiseta',
        price: 19.90,
        quantity: 12,
        brands: ['Nike', 'Adidas'],
    };
    it('retornar uma string', function () {
        var result = (0, _02_insertProducts_1.default)(brandsInStock, productWithCorrectBrands);
        expect(typeof result).toBe('string');
    });
    it('retornar a mensagem de adição bem sucedida ao estoque, com nome e preço, caso todas as marcas do produto estejam no array de marcas recebido pela função', function () {
        var result = (0, _02_insertProducts_1.default)(brandsInStock, productWithCorrectBrands);
        var expectedMessage = "Camiseta adicionado(a) com o pre\u00E7o de R$ 29.9";
        expect(result).toContain(expectedMessage);
    });
    it('retornar a mensagem sobre uma marca estar indisponível para seu produto', function () {
        var result = (0, _02_insertProducts_1.default)(brandsInStock, productWithWrongBrands);
        var expectedMessage = 'Seu produto contém marcas indisponíveis.';
        expect(result).toContain(expectedMessage);
    });
});
