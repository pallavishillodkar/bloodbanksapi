const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
  DonorId: { type: mongoose.Schema.Types.ObjectId, ref: "Donors" },
  PatientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  RequestDate: { type: Date, default: new Date() },
  RequestStatus: { type: String, default: "Pending" },
  HospitalName: String,
  HospitalAddress: String,
});

module.exports = mongoose.model("Requests", RequestSchema);
