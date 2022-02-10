const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const db = require('./db/models/index');
const User = require('./db/models/user');

const app = express();
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    User.findById(1)
        .then(user => {
            req.user = user
            next();
        })
        .catch(err => console.log(err))
});

// db.sequelize
//     .sync()
//     .then(result => {
//         return User.findById(1)
//     })
//     .then(user => {
//         console.log(user)
//     })
//     .then(res => {
//         app.listen(3000);
//     })
//     .catch(err => {
//         console.log(err);
//     })

try {
    db.sequelize.authenticate();
    console.log('Connection has been established successfully by me.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}