"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _05_orderRequest_1 = __importDefault(require("../src/05-orderRequest"));
describe('05 - orderRequest deve retornar', function () {
    var productWithStockOne = {
        id: 1,
        name: 'Camiseta',
        price: 29.9,
        quantity: 25,
        brands: ['Nike', 'Reebok'],
    };
    var productsWithStockTwo = {
        id: 2,
        name: 'Caneca',
        price: 19.90,
        quantity: 10,
        brands: ['Stanley', 'Camelbak'],
    };
    var itemsWithStock = [
        {
            product: productWithStockOne,
            quantity: 3,
            phrase: "Feliz aniversário, Judite",
            brand: 'Nike'
        },
        {
            product: productsWithStockTwo,
            quantity: 3,
            phrase: 'Acho bom amar a caneca, Judite!',
            brand: 'Stanley'
        }
    ];
    var orderWithStock = {
        id: 1,
        customerName: 'John Doe',
        customerEmail: 'johndoe@example.com',
        items: itemsWithStock,
        status: 'pendente',
    };
    it('uma string', function () {
        var result = (0, _05_orderRequest_1.default)(orderWithStock);
        expect(typeof result).toBe('string');
    });
    it('atualização da ordem para "enviado"', function () {
        var result = (0, _05_orderRequest_1.default)(orderWithStock);
        var expected = 'Olá John Doe, o seu pedido de ID 1 foi enviado.';
        expect(result).toContain(expected);
    });
    var productWithoutStockOne = {
        id: 3,
        name: 'Boné',
        price: 39.90,
        quantity: 0,
        brands: ['Adidas'],
    };
    var itemsWithoutStock = [
        {
            product: productWithoutStockOne,
            quantity: 3,
            phrase: 'Pra proteger do sol, Judite!',
            brand: 'Adidas'
        }
    ];
    var orderWithoutStock = {
        id: 1,
        customerName: 'John Doe',
        customerEmail: 'johndoe@example.com',
        items: itemsWithoutStock,
        status: 'pendente',
    };
    it('lançar uma mensagem de erro se qualquer um dos produtos não ter estoque', function () {
        var expected = 'Desculpe, Boné não está disponível no estoque';
        expect(function () { return (0, _05_orderRequest_1.default)(orderWithoutStock); }).toThrowError(expected);
    });
});
