var express = require('express');
var url = require('url');
var querstring = require('querystring');
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }))
router.all('/form', function (req, res) {
    var response = {
        header: req.headers,
        body: req.body,
    };
});
module.exports = router;