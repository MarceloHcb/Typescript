"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCartItem = exports.updateItem = exports.first = void 0;
function first(arr) {
    return arr[0];
}
exports.first = first;
function updateItem(arr, n, newObj) {
    if (!arr[n])
        return arr;
    //   const newArr = [...arr];
    //   newArr[n] = newObj;
    //   return newArr;
    //   return arr.map((el, index) => {
    //     if (index === n) return newObj;
    //     return el;
    //   });
    arr.splice(n, 1, newObj);
    return arr;
}
exports.updateItem = updateItem;
function buildCartItem(item, quantity) {
    var name = item.name, price = item.price;
    return ({ quantity: quantity, name: name, price: price });
}
exports.buildCartItem = buildCartItem;
