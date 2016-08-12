var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index',{header:'index!'});
});
router.get('/about', function(req, res) {
    res.render('about',{header:'about!'});
});
router.get('/contact', function(req, res) {
    res.render('contact',{header:'contact!'});
});

module.exports = router;
