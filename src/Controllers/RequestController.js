const Request = require("../Models/RequestSchema");

//add Request
exports.addrequest = async (request, response) => {
  try {
    let result = await Request.create(request.body);
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//allRequests user
exports.allrequests = async (request, response) => {
  try {
    let result = await Request.find();
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//delete requests
exports.deleterequests = async (request, response) => {
  try {
    let result = await Request.findByIdAndDelete({
      _id: request.body.Requestsid,
    });
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json(error);
  }
};

//update status
exports.updatestatus = async (request, response) => {
  try {
    let result = await Request.findByIdAndUpdate(
      request.body.Requestsid,
      {  RequestStatus: request.body.RequestStatus},
      { new: true }
    );
    response.status(200).json(result);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
