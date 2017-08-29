var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    idFb: String,
    avaFb: String,
    nameFb: String,
    emailFb: String,
    ratePoint: Number,
    rateNum: Number,
    listSub: [String]
  }
);
var userModel = mongoose.model("User", userSchema);

module.exports = userModel;
