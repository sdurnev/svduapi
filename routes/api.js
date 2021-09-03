var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getip', function(req, res, next) {
  ip=req.ip
  if (ip.substr(0, 7) === "::ffff:") {
    ip = ip.substr(7)
  }
  console.log(ip);
  res.send('{ip:'+ip+'}');
});

module.exports = router;
