var express = require('express');
var router = express.Router();
var entertainmentCtrl = require('../controllers/entertainment');

router.get('/', entertainmentCtrl.index);
router.get('/:id/edit', isLoggedIn, entertainmentCtrl.edit);
router.get('/new', entertainmentCtrl.showForm);
router.put('/:id', isLoggedIn, entertainmentCtrl.update);
router.post('/', isLoggedIn, entertainmentCtrl.create);
router.delete('/:id', isLoggedIn, entertainmentCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  };

module.exports = router;