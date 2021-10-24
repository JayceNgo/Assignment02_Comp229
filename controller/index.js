/* Filename: server.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Date: 23nd Oct 2021  */


exports.home = function(req, res, next) {
  console.log('===> Original URL: ' + req.session.url);
  res.render('index', { 
      title: 'Home',
      userName: req.user ? req.user.username : ''
  });
};

exports.about = function(req, res, next) {
  res.render('index', { 
      title: 'About',
      userName: req.user ? req.user.username : ''
   });
}

exports.projects = function(req, res, next) {
  res.render('index', { 
    title: 'Projects',
    userName: req.user ? req.user.username : '' 
  });
}