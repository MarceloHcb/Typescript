"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertProducts(availableBrands, product) {
    var brandMap = availableBrands.every(function (brand) {
        return product.brands.includes(brand);
    });
    if (brandMap)
        return "".concat(product.name, " adicionado(a) com o pre\u00E7o de R$ ").concat(product.price.toFixed(2), " ");
    return 'Seu produto contém marcas indisponíveis.';
}
exports.default = insertProducts;
