const User = require('./User');
const Comment = require('./Comment');

// associations
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Comment };