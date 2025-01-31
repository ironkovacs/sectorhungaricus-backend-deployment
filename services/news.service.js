"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNews = exports.getNews = void 0;
const sequelize_1 = require("sequelize");
const NewsModel_1 = require("../models/NewsModel");
const getNews = async ({ latest, type, category, page, limit }) => {
    // Dynamic filter object
    const whereClause = {};
    // Filter: Latest (last 2 months)
    if (latest) {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
        whereClause.created_at = { [sequelize_1.Op.gte]: twoMonthsAgo }; // `>=` filter for 'created_at'
    }
    // Filter: By type (comma-separated)
    if (type) {
        whereClause.type = { [sequelize_1.Op.in]: type.split(',') };
    }
    // Filter: By category
    if (category) {
        whereClause.category = category;
    }
    // Pagination
    const offset = (page - 1) * limit; // Items to skip
    const result = await NewsModel_1.News.findAll({
        where: whereClause,
        order: [['created_at', 'DESC']], // Sort by most recent
        limit,
        offset,
    });
    return {
        page,
        limit,
        data: result,
    };
};
exports.getNews = getNews;
const addNews = async ({ created_by, category, type, content_hu, content_en }) => {
    return await NewsModel_1.News.create({ created_by, category, type, content_hu, content_en });
};
exports.addNews = addNews;
//# sourceMappingURL=news.service.js.map