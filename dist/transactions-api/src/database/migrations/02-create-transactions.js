"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = {
    up: function (queryInterface) {
        return queryInterface.createTable('transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING(30),
            },
            price: {
                allowNull: false,
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
            },
            type: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            userId: {
                allowNull: false,
                field: 'user_id',
                type: sequelize_1.DataTypes.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('transactions');
    }
};
