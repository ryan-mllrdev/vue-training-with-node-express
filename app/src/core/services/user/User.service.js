"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User_1 = require("../../../models/dbmodels/User");
const UserService = (app) => {
    app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield User_1.User.findAll().then(users => {
            res.send(users);
        });
    }));
    app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield User_1.User.create(req.body).then((newUser) => {
            res.send(newUser);
        });
    }));
};
module.exports = UserService;
