import express from 'express';
import sequelize from './app/src/models/';
import UserService from './app/src/core/services/user/User.service';
import * as core from 'express-serve-static-core';
import cors from 'cors';
import UploadFile from './app/src/core/services/uploadFIle/UploadFile.service';

const app: core.Express = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(__dirname + "/public"));

UploadFile(app);

sequelize.authenticate().then(() => {
    UserService(app);
}).catch(error => console.error('Unable to connect to the database:', error));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});