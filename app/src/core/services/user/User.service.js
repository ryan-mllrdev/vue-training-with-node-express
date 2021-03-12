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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const UserRepository_1 = __importDefault(require("../../repositories/user/UserRepository"));
const UserService = (app) => {
    app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // await User.findAll().then(users => {
        //     res.send(users);
        // }).catch(error => {
        //     res.send(error);
        //     console.log(error);
        // });
        yield UserRepository_1.default.getUsers().then(users => {
            res.send(users);
        }).catch(error => {
            res.send(error);
            console.log(error);
        });
    }));
    app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // await User.create(req.body).then((newUser) => {
        //     res.send(newUser);
        // }).catch(error => {
        //     res.send(error);
        //     console.log(error);
        // });
        yield UserRepository_1.default.createUser(req.body).then((newUser) => {
            res.send(newUser);
        }).catch(error => {
            res.send(error);
            console.log(error);
        });
    }));
    app.put('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // await User.findByPk(req.params.id).then((user) => {
        //     user?.update({ ...req.body }).then(updatedUser => {
        //         res.send(updatedUser);
        //     }).catch(error => {
        //         res.send(error);
        //         console.log(error);
        //     });
        // });
        yield UserRepository_1.default.updateUser(req.body).then(user => {
            res.send(user);
        }).catch(error => {
            res.send(error);
            console.log(error);
        });
    }));
};
module.exports = UserService;
