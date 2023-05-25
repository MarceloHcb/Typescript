"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = [
    {
        id: 1,
        name: 'Camiseta',
        price: 29.9,
        quantity: 3,
        brands: ['Nike', 'Reebok'],
    },
    {
        id: 2,
        name: 'Caneca',
        price: 19.90,
        quantity: 12,
        brands: ['Stanley', 'Camelbak'],
    },
    {
        id: 3,
        name: 'Boné',
        price: 39.90,
        quantity: 0,
        brands: [],
    },
];
function findById(idToFind) {
    var product = products.find(function (_a) {
        var id = _a.id;
        return id === idToFind;
    });
    if (product)
        return product;
    return "Produto com ID ".concat(idToFind, " n\u00E3o encontrado.");
}
exports.default = findById;
