"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../sequelize");
// Define the News model
class News extends sequelize_1.Model {
}
exports.News = News;
// Initialize the model with Sequelize
News.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    created_by: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.ENUM('killteam', 'warcry', 'spearhead', 'local'),
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM('news', 'events'),
        allowNull: false,
    },
    content_hu: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    content_en: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.sequelize, // Pass the Sequelize instance
    tableName: 'news',
});
//# sourceMappingURL=NewsModel.js.map