const express = require('express');
// const bodyParser = require('body-parser');
const cors = require("cors");
const cookieSession = require("cookie-session");
const db = require('./db/models');
const app = express();

app.use(cors("*"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
});

app.use(
    cookieSession({
      name: "ramin-session",
      secret: "COOKIE_SECRET",
      httpOnly: true,
      sameSite: 'strict'
    })
);
  

const sequelize = db.sequelize
sequelize.authenticate().then(() => {
    console.log('Datebase connected...');
}).catch(err => {
    console.log('Error: ' + err);
});

// app.use(bodyParser.json({ limit: '50mb'}));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));

app.use('/', require('./routes'));

const PORT = process.env.PORT || 4000;
(async () => {
    await sequelize.sync().then(() => {
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    }).catch(err => console.log("Error: " + err))
    
})();
