const router = require("express").Router();
const sequelize = require("../config/connection");
const {Comment, User, Vote } = require("../models");

router.get('/', (req, res) => {
    res.render('homepage');
})

router.get('/commentboard/:id', (req, res) => {
    const comment = {
        id: 1,
        drink_name: 'Screwdriver',
        drink_description: 'Orange juice and vodka. boring',
        created_at: new Date(),
        user: {
            username: 'test_user'
        }
    }
    res.render('commentboard', { comment });
})

module.exports = router;