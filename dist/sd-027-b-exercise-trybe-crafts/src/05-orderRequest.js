"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderRequest(obj) {
    obj.items.forEach(function (item) {
        if (item.product.quantity === 0) {
            throw new Error("Desculpe, ".concat(item.product.name, " n\u00E3o est\u00E1 dispon\u00EDvel no estoque."));
        }
    });
    return "Ol\u00E1 ".concat(obj.customerName, ", o seu pedido de ID ").concat(obj.id, " foi enviado.");
}
exports.default = orderRequest;
