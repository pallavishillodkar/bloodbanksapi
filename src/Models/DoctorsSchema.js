const mongoose = require ("mongoose");

const DoctorsSchema = mongoose.Schema({
    DoctorName : String,
    DoctorEmailId : String,
    DoctorMoNo : Number,
    HospitalName : String,
});

module.exports = mongoose.model("Doctors", DoctorsSchema);