var express = require('express');
var router = express.Router();
var sportsCtrl = require('../controllers/sports');

router.get('/', sportsCtrl.index);
router.get('/:id/edit', isLoggedIn, sportsCtrl.edit);
router.get('/new', sportsCtrl.showForm);
router.put('/:id', isLoggedIn, sportsCtrl.update);
router.post('/', isLoggedIn, sportsCtrl.create);
router.delete('/:id', isLoggedIn, sportsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  };

module.exports = router;