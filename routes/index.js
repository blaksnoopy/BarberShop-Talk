var express = require('express');
var router = express.Router();
var passport = require('passport');
var userCtrl = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'BarberShop Talk',
    user: req.user
  });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'],
    prompt: 'select_account' }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/auth/google'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
