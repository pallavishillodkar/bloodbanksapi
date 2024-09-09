const { request, response } = require("express");
const User = require("../Models/UserSchema");

//addUser
exports.addUser = async (request, response) => {
    try {
      let result = await User.create(request.body);
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  //allUser
exports.allUsers = async (request, response) => {
    try {
      let result = await User.find();
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  //delete User
exports.deleteUser = async (request, response) => {
    try {
      let result = await User.findByIdAndDelete({
        _id: request.body.Userid,
      });
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  //update User
exports.updateUser = async (request, response) => {
  try {
    let result = await User.findByIdAndUpdate(
      request.body.Userid,
      { UserMoNo: request.body.UserMoNo },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

//dologin 
exports.doLogin = async (request, response) => {
  try {
    const result = await User.findOne(request.body);
    if (!result) {
      const message = {
        message: "Login Fail",
        data: result,
      };
      response.status(200).json(message);
    } else {
      const message = {
        message: "Login Success",
        data: result,
      };
      response.status(200).json(message);
    }
  } catch (error) {
    response.status(500).send(error);
  }
};
  
