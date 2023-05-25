"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _03_findById_1 = __importDefault(require("../src/03-findById"));
describe('03 - findById deve retornar', function () {
    it('um produto do tipo objeto', function () {
        var result = (0, _03_findById_1.default)(3);
        expect(result).toBeInstanceOf(Object);
    });
    it('o produto com o id especificado', function () {
        var result = (0, _03_findById_1.default)(2);
        var expected = {
            id: 2,
            name: 'Caneca',
            price: 19.90,
            quantity: 12,
            brands: ['Stanley', 'Camelbak']
        };
        expect(result).toStrictEqual(expected);
    });
    it('uma mensagem do tipo string caso não encontre o id', function () {
        var result = (0, _03_findById_1.default)(99);
        expect(typeof result).toBe('string');
    });
    it('uma mensagem caso não encontre o id', function () {
        var result = (0, _03_findById_1.default)(45);
        var expected = 'Produto com ID 45 não encontrado.';
        expect(result).toBe(expected);
    });
});
