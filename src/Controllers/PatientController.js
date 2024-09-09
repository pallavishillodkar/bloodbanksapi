const { request, response } = require("express");
const Patient = require("../Models/PatientSchema");

//add Patient
exports.addPatient = async (request, response) => {
  try {
    let result = await Patient.create(request.body);
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//allPatient
exports.allPatients = async (request, response) => {
  try {
    let result = await Patient.find();
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//delete Patient
exports.deletePatient = async (request, response) => {
  try {
    let result = await Patient.findByIdAndDelete({
      _id: request.body.Patientid,
    });
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//update Patient
exports.updatePatient = async (request, response) => {
  try {
    let result = await Patient.findByIdAndUpdate(
      request.body.Patientid,
      { PatientMoNo: request.body.PatientMoNo },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
