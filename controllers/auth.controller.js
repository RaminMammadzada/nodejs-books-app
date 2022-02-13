const db = require("../db/models");
const config = require("../config/auth.config");
const User = db.User;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

var authController = {
    signup: signup,
    signin: signin,
    signout: signout
}

async function signup(req, res) {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        res.send({ message: "User has been registered successfully!" });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
}

async function signin (req, res) {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
            });
        }

        // token will expire in 24 hours
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        });

        req.session.token = token;

        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
}

async function signout (req, res) {
    try {
      req.session = null;
      return res.status(200).send({
        message: "You've been signed out!"
      });
    } catch (err) {
      this.next(err);
    }
  };

module.exports = authController;
