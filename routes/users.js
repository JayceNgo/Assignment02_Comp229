/* Filename: users.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 2nd Oct 2021 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users', {
     title: 'users',
    userName:'JC Ngo' });
});

module.exports = router;
