var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('politics/index', { 
        title: "Let's Talk Politics!!!",
        user: req.user
      });
});

module.exports = router;