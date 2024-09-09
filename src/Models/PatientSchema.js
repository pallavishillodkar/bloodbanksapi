const mongoose = require ("mongoose");

const PatientSchema = mongoose.Schema ({
    PatientName : String,
    PatientMoNo : Number,
    PatientAddress : String,
    PatientCity : String,
    PatientBloodGroup : String,
    PatientGender : String,
});

module.exports = mongoose.model("Patient", PatientSchema);