const { request, response } = require("express");
const Contact = require("../Models/ContactSchema");

//addContact
exports.addContact = async (request, response) => {
    try {
      let result = await Contact.create(request.body);
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  //allContact
exports.allContacts = async (request, response) => {
    try {
      let result = await Contact.find();
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  //delete Contact
exports.deleteContact = async (request, response) => {
    try {
      let result = await Contact.findByIdAndDelete({
        _id: request.body.Contactid,
      });
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json(error);
    }
  };
