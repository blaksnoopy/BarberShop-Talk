var express = require('express');
var router = express.Router();
var sportsCtrl = require('../controllers/sports');

router.get('/', sportsCtrl.index);
router.get('/new', sportsCtrl.showForm);
router.post('/', sportsCtrl.create);

module.exports = router;