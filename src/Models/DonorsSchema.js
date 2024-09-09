const mongoose = require("mongoose");

const DonorsSchema = mongoose.Schema({
    DonorName : String,
    DonorMoNo : Number,
    DonorAddress : String,
    DonorCity : String,
    DonorBloodGroup : String,
    DonorGender : String,
    IsAvailable : {type: Boolean, default: true},
});

module.exports = mongoose.model("Donors", DonorsSchema);

