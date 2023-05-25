"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _01_insert_1 = __importDefault(require("../src/01-insert"));
describe('01 - insert deve', function () {
    it('retornar uma string, após receber o nome do produto', function () {
        var add = _01_insert_1.default;
        var result = add('Camiseta');
        expect(typeof result).toBe('string');
    });
    it('retornar a mensagem `Camiseta adicionado(a) com sucesso!`', function () {
        var add = _01_insert_1.default;
        var result = add('Camiseta');
        expect(result).toBe('Camiseta adicionado(a) com sucesso!');
    });
});
