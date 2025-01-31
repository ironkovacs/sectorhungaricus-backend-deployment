"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const news_controller_1 = require("../controllers/news.controller");
const router = new router_1.default();
// Define routes
router.get('/news', news_controller_1.fetchNews); // GET /news with filters
router.post('/news', news_controller_1.createNews); // POST /news to add a news item
exports.default = router;
//# sourceMappingURL=news.routes.js.map