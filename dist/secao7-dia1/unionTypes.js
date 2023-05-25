"use strict";
function printId1(id) {
    console.log("Your ID is: ".concat(id));
}
printId1(101);
printId1("202");
function printId2(id) {
    console.log(id.toUpperCase());
}
printId2(101);
function printId3(id) {
    if (typeof id === "string") {
        return console.log(id.toUpperCase());
    }
    return console.log(id);
}
printId3(101);
function printPersonalInfo(data) {
    console.log("".concat(data.name, " was born in ").concat(data.birthYear, "."));
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });
var person = {
    fistName: 'Frodo',
    lastName: 'Baggins',
    age: 52,
};
console.log(typeof person.fistName); // "string"
// const person = {
//   fistName: 'Frodo',
//   lastName: 'Baggins',
//   age: 52,
// }
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName(person.fistName, person.lastName)); // "Frodo Baggings"
