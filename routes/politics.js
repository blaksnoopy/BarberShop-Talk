var express = require('express');
var router = express.Router();

router.get('/politics', function(req, res, next) {
    res.render('users/politics', { 
        title: 'BarberShop Talk',
        user: req.user
      });
});

module.exports = router;