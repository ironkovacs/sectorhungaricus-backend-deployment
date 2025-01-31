"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const news_routes_1 = __importDefault(require("./routes/news.routes"));
const app = new koa_1.default();
// Middleware
app.use((0, koa_body_1.default)());
// Register routes
app.use(news_routes_1.default.routes());
app.use(news_routes_1.default.allowedMethods());
exports.default = app;
//# sourceMappingURL=app.js.map