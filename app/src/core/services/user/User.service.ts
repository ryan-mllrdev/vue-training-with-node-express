import { User } from "../../../models/dbmodels/User";
import * as core from 'express-serve-static-core';

const UserService = (app: core.Express) => {
    app.get('/users', async (req, res) => {
        await User.findAll().then(users => {
            res.send(users);
        });
    });

    app.post('/user', async (req, res) => {
        await User.create(req.body).then((newUser) => {
            res.send(newUser);
        });
    });
};

export = UserService;
