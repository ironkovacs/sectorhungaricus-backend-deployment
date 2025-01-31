"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNews = exports.fetchNews = void 0;
const news_service_1 = require("../services/news.service");
// GET /news
const fetchNews = async (ctx) => {
    try {
        const { latest, type, category, page, limit } = ctx.query;
        const result = await (0, news_service_1.getNews)({
            latest: latest === 'true',
            type: type,
            category: category,
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 10,
        });
        ctx.status = 200;
        ctx.body = result;
    }
    catch (error) {
        console.error('Error fetching news:', error);
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch news.' };
    }
};
exports.fetchNews = fetchNews;
// POST /news
const createNews = async (ctx) => {
    const { created_by, category, type, content_hu, content_en } = ctx.request.body;
    if (!created_by || !category || !type || !content_hu || !content_en) {
        ctx.status = 400;
        ctx.body = { error: 'Missing required fields.' };
        return;
    }
    try {
        const news = await (0, news_service_1.addNews)({ created_by, category, type, content_hu, content_en });
        ctx.status = 201;
        ctx.body = { success: true, id: news.id };
    }
    catch (error) {
        console.error('Error creating news:', error);
        ctx.status = 500;
        ctx.body = { error: 'Failed to create news.' };
    }
};
exports.createNews = createNews;
//# sourceMappingURL=news.controller.js.map