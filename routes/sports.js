var express = require('express');
var router = express.Router();

router.get('/sports', function(req, res, next) {
    res.render('users/sports', { 
        title: 'BarberShop Talk',
        user: req.user
      });
});

module.exports = router;