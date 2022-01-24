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
        res.render('commentboard', { 
            comments,
        loggedIn: req.session.loggedIn 
    });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.get('/commentboard/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'drink_name',
            'drink_description',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        const comment = dbCommentData.get({ plain: true });

        res.render('commentboard', { comment });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;