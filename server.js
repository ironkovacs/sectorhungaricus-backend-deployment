"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./sequelize");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 26117;
// Test database connection and sync models
(async () => {
    try {
        await (0, sequelize_1.testConnection)(); // Test connection
        await sequelize_1.sequelize.sync({ alter: true }); // Sync all models (use `force: true` in development)
        console.log('Database synced successfully.');
    }
    catch (error) {
        console.error('Failed to sync the database:', error);
        process.exit(1); // Exit the process if the DB fails to connect
    }
    // Start the server
    app_1.default.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
})();
//# sourceMappingURL=server.js.map