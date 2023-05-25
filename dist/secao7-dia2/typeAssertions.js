"use strict";
var UserDB = {
    findById: function (userId) { return ({
        id: userId,
        name: 'Silvana',
    }); },
};
function getUser(userId) {
    var user = UserDB.findById(userId);
    user.address = 'Rua São Camilo'; // Error: Property 'address' does not exist on type '{ id: number; name: string; }'.
    return user; // Error: Type '{ id: number; name: string; }' is missing the following properties from type 'User': address, addressNumber
}
