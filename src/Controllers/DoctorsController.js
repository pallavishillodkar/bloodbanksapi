const Doctor = require("../Models/DoctorsSchema");

//add Doctors
exports.addDoctor = async (request, response) => {
  try {
    let result = await Doctor.create(request.body);
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//allDoctores user
exports.allDoctors = async (request, response) => {
  try {
    let result = await Doctor.find();
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//delete doctores
exports.deletedoctors = async (request, response) => {
  try {
    let result = await Doctor.findByIdAndDelete({
      _id: request.body.Doctorsid,
    });
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//update doctores
exports.updatedoctors = async (request, response) => {
  try {
    let result = await Doctor.findByIdAndUpdate(
      request.body.Doctorsid,
      { DoctorEmailId: request.body.DoctorEmailId },
      { new: true }
    );
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
