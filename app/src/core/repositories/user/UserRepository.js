"use strict";
const User_1 = require("../../../models/dbmodels/User");
const createUser = (user) => {
    return User_1.User.create(user);
};
const updateUser = (data) => {
    return User_1.User.findByPk(data.id).then((user) => {
        return user === null || user === void 0 ? void 0 : user.update(Object.assign({}, data));
    });
};
const getUsers = () => {
    return User_1.User.findAll();
};
module.exports = {
    createUser,
    updateUser,
    getUsers
};
