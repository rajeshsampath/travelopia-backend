const express = require('express');
const { createTravelRequest, getAllTravelRequest } = require('../services/travel-request.service');

const router = express.Router();

router.get('/all', getAllTravelRequest)
router.post("/create", createTravelRequest);

module.exports = router;