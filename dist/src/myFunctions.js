"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMostActiveUser = exports.getUsersByRepoQuantity = exports.getUserNames = void 0;
var getUserNames = function (userList) { return userList.map(function (user) { return user.name; }); };
exports.getUserNames = getUserNames;
var getUsersByRepoQuantity = function (users, repos) { return users
    .filter(function (user) { return user.repositories >= repos; }).map(function (user) { return user.name; }); };
exports.getUsersByRepoQuantity = getUsersByRepoQuantity;
var IsMostActiveUser = function (name, users) {
    var mostActiveUser = users.reduce(function (prev, curr) {
        return (prev.repositories > curr.repositories ? prev : curr);
    });
    return mostActiveUser.name === name;
};
exports.IsMostActiveUser = IsMostActiveUser;
