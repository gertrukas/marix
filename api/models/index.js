const Blog = require('./blog.model');
const Category = require('./category.model');
const ResetPassword = require('./resetPassword.model');
const User = require('./user.model');
const Tag = require('./tag.model');
const Server = require('./server');
const { request } = require('express');

module.exports = {
    Blog,
    Category,
    ResetPassword,
    User,
    Tag,
    Server
}
