import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "learning-node-express",
  dialect: "postgres",
  username: "postgres",
  password: "Admin!23",
  //   storage: ':memory:',
  models: [__dirname + "/dbmodels/*.ts"],
  //   modelMatch: (filename, member) => {
  //     return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  //   },
});
export = sequelize;
