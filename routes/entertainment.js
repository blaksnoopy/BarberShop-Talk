var express = require('express');
var router = express.Router();

router.get('/entertainment', function(req, res, next) {
    res.render('users/entertainment', { 
        title: 'BarberShop Talk',
        user: req.user
      });
});

module.exports = router;