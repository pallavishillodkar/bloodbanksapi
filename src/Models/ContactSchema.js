const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    Name : String,
    EmailId : String,
    Phone : Number,
    Messsage : String,
});

module.exports = mongoose.model("Contact", ContactSchema);