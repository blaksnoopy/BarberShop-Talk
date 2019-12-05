var express = require('express');
var router = express.Router();
var politicssCtrl = require('../controllers/politics');

router.get('/', politicssCtrl.index);
router.get('/:id/edit', isLoggedIn, politicssCtrl.edit);
router.get('/new', politicssCtrl.showForm);
router.put('/:id', isLoggedIn, politicssCtrl.update);
router.post('/', isLoggedIn, politicssCtrl.create);
router.delete('/:id', isLoggedIn, politicssCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  };

module.exports = router;