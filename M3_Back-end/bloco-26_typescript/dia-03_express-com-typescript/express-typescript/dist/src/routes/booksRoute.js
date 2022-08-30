"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = __importDefault(require("../controllers/booksController"));
const booksMiddleware_1 = __importDefault(require("../middlewares/booksMiddleware"));
const booksRouter = (0, express_1.Router)();
const booksController = new booksController_1.default();
booksRouter.get('/', booksController.getAll);
booksRouter.get('/:id', booksController.getById);
booksRouter.post('/', booksMiddleware_1.default, booksController.create);
booksRouter.put('/:id', booksMiddleware_1.default, booksController.update);
booksRouter.delete('/:id', booksController.remove);
exports.default = booksRouter;
