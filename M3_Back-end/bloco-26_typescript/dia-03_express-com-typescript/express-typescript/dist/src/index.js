"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const errors_1 = __importDefault(require("./middlewares/errors"));
const booksRoute_1 = __importDefault(require("./routes/booksRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.use('/books', booksRoute_1.default);
app.use(errors_1.default);
app.listen(PORT, () => {
    console.log(`Ouvindo na porta: ${PORT}`);
});
