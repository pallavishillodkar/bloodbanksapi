const mongoose = require ("mongoose");

const UserSchema = mongoose.Schema ({
    UserName : String,
    UserEmailId : String,
    UserAddress : String,
    UserMoNo : Number,
    UserPassword : String,
    UserType : String,
});

module.exports = mongoose.model("User", UserSchema);