
const { response, request } = require("express");
const Donors = require("../Models/DonorsSchema");

// add Donors
exports.adddonor = async (request, response) => {
    try {
        let result = await Donors.create(request.body);
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error);
    }
};

//allDonors user
exports.alldonors = async (request, response) => {
    try {
        let result = await Donors.find();
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error);
    }
};

//delete donors
exports.deletedonors = async (request, response) => {
    try {
        let result = await Donors.findByIdAndDelete({ _id:request.body.Donorsid});
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json(error);
    }
}

//update donors
exports.updatedonors = async (request, response) => {
    try {
        let result = await Donors.findByIdAndUpdate(
            request.body.Donorsid,
            {DonorMoNo: request.body.DonorMoNo },
            {new: true}
        );
        response.status(200).json(result);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}