const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const db = require('./db/models/index');
const sequelize = db.sequelize
sequelize.authenticate().then(() => {
    console.log('Datebase connected...');
}).catch(err => {
    console.log('Error: ' + err);
});

const app = express();

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
app.use(cors("*"));

app.use('/', require('./routes'));

const PORT = process.env.PORT || 4000;
(async () => {
    await sequelize.sync().then(() => {
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    }).catch(err => console.log("Error: " + err))
    
})();
