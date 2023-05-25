"use strict";
describe('05 - Type CartItem', function () {
    it('O type CartItem existe', function () {
        expect('CartItem.exists').toCompile();
    });
    it('O type CartItem deve ter o atributo name', function () {
        expect('CartItem.without_name').notToCompile();
    });
    it('O type CartItem deve ter o atributo price', function () {
        expect('CartItem.without_price').notToCompile();
    });
    it('O type CartItem deve ter o atributo quantity', function () {
        expect('CartItem.without_quantity').notToCompile();
    });
    it('O type CartItem deve ter os atributos name e price', function () {
        expect('CartItem.valid').toCompile();
    });
});
