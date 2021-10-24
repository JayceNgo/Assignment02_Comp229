/* Filename: index.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 2nd Oct 2021 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: 'Home' });
});

/* GET About page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About me' });
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

/* GET About page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

/* GET About page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});
module.exports = router;
