var express = require('express');
const app = require('../app');
const travelRequest = require('./travel-request.route')
var router = express.Router();


router.get("/health-check", (req, res) => {
  res.json({
    status: 200,
    message: `Travel Api health check is OK`
  })
})

router.use("/travel-request", travelRequest)

router.get("/")

module.exports = router;
