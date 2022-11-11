const mongoose = require("mongoose");

const travelRequestSchema = new mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    no_of_pax: Number,
    budget_per_pax: Number,
    total_price: Number,
    currency: String
}, {
    timestamps: true
})

module.exports = mongoose.model("TravelRequest", travelRequestSchema)