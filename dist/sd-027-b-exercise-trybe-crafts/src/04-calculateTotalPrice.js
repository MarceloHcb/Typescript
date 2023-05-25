"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalPrice(obj) {
    return Number(obj.reduce(function (acc, cur) { return acc + cur.product.price * cur.quantity; }, 0).toFixed(2));
}
exports.default = calculateTotalPrice;
