const mongoose = require ("mongoose")

const BagsSchema = mongoose.Schema({
    BloodGroup : String,
    NumberOfAvailable : Number,
    BagsPrice : Number,
    // BloodQuantity : Number,
    BloodQuantity : {type: String, default: "500ml"},
})

module.exports = mongoose.model("Bags",BagsSchema)

