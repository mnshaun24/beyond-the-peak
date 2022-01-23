const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, User, Vote } = require('../models');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id', 'drink_name', 'drink_description', 'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbCommentData => {
        const comments = dbCommentData.map(comment => comment.get({ plain: true }));
        res.render('commentboard', { comments });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;