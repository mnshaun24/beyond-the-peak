const router = require("express").Router();
const sequelize = require("../config/connection");
const {Comment, User, Vote } = require("../models");

router.get('/', (req, res) => {
    res.render('homepage');
})

module.exports = router;