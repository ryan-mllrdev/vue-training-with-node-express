import { User } from "../../../models/dbmodels/User";
import * as core from 'express-serve-static-core';
import UserRepository from "../../repositories/user/UserRepository";

const UserService = (app: core.Express) => {
    app.get('/users', async (req, res) => {
        // await User.findAll().then(users => {
        //     res.send(users);
        // }).catch(error => {
        //     res.send(error);
        //     console.log(error);
        // });

        await UserRepository.getUsers().then(users => {
            res.send(users);
        }).catch(error => {
            res.send(error);
            console.log(error);
        });

    });

    app.post('/user', async (req, res) => {
        // await User.create(req.body).then((newUser) => {
        //     res.send(newUser);
        // }).catch(error => {
        //     res.send(error);
        //     console.log(error);
        // });
        await UserRepository.createUser(req.body).then((newUser) => {
            res.send(newUser);
        }).catch(error => {
            res.send(error);
            console.log(error);
        });
    });

    app.put('/user/:id', async(req, res) => {
        // await User.findByPk(req.params.id).then((user) => {
        //     user?.update({ ...req.body }).then(updatedUser => {
        //         res.send(updatedUser);
        //     }).catch(error => {
        //         res.send(error);
        //         console.log(error);
        //     });
        // });

        await UserRepository.updateUser(req.body).then(user => {
            res.send(user);
        }).catch(error => {
            res.send(error);
            console.log(error);
        })

    });
};

export = UserService;
