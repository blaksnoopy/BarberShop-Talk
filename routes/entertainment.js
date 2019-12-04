var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('entertainment/index', { 
        title: "Let's Talk Entertainment / Music!!!",
        user: req.user
      });
});

module.exports = router;