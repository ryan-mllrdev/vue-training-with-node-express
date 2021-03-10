"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./app/src/models/"));
const User_service_1 = __importDefault(require("./app/src/core/services/user/User.service"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
models_1.default.authenticate().then(() => {
    User_service_1.default(app);
}).catch(error => console.error('Unable to connect to the database:', error));
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
