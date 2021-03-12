import { User } from "../../../models/dbmodels/User";

const createUser = (user: User) => {
    return User.create(user);
}

const updateUser = (data: User) => {
    return User.findByPk(data.id).then((user) => {
        return user?.update({ ...data });
    });
}

const getUsers = () => {
    return User.findAll();
}

export = {
    createUser,
    updateUser,
    getUsers
}