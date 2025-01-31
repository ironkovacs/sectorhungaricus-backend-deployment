"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('s10_sectorhungaricus', 'u10_jICroN1T00', 'O.Bze7uAM2nyq7tkmykjK=je', {
    host: 's1.hostingplace.hu',
    port: 3306,
    dialect: 'mysql', // It tells Sequelize which database you're using
    logging: console.log, // Optional: Useful for debugging SQL queries
});
const testConnection = async () => {
    try {
        await exports.sequelize.authenticate();
        console.log('Connection to the database established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
exports.testConnection = testConnection;
//# sourceMappingURL=sequelize.js.map