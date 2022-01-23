const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, User, Vote } = require('../models');


module.exports = router;