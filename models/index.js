const User = require('./User');
const Comment = require('./Comment');
const Vote = require('./Vote');

// associations
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

User.belongsToMany(Comment, {
    through: Vote,
    as: 'voted_comments',
    foreignKey: 'user_id'
})

Comment.belongsToMany(User, {
    through: Vote,
    as: 'voted_comments',
    foreignKey: 'comment_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Vote.belongsTo(User, {
    foreignKey: 'user_id'
})

Vote.belongsTo(Comment, {
    foreignKey: 'comment_id'
})

User.hasMany(Vote, {
    foreignKey: 'user_id'
})

Comment.hasMany(Vote, {
    foreignKey: 'post_id'
})

module.exports = { User, Comment, Vote };