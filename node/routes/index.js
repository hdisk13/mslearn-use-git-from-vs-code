const express = require('express');
const router = express.Router();

/* GET the special home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Git!' });
});

module.exports = router;
