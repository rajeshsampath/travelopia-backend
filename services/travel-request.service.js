const travelRequest = require('../models/travel-request.model');

const createTravelRequest = async(req, res) => {
    await new travelRequest(req.body)
                .save()
                .then(() => {
                    res.json({
                        status: 200,
                        message: "Travel Request is created successfully"
                    })
                })
                .catch((e) => {
                    res.json({
                        status: 400,
                        message: e.message
                    })
                })
}

const getAllTravelRequest = async(req, res) => {
    await travelRequest.find({},{_id:0, name:1, email: 1, destination: 1, no_of_pax: 1, budget_per_pax:1, total_price: 1})
            .then(data => {
                res.json({
                    status: 200,
                    data
                })
            })
            .catch((e) => {
                res.json({
                    status: 400,
                    message: e.message
                })
            })
}

module.exports = {createTravelRequest, getAllTravelRequest}