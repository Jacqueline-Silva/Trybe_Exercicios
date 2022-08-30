"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const restaurant_router_1 = __importDefault(require("./routers/restaurant.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.use(restaurant_router_1.default);
exports.default = app;
