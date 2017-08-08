var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foodSchema = new Schema({
    id: Number,
    name: String,
    author: String,
    imageShow: String,
    type: String,
    time: String,
    sets: Number,
    level: String,
    rating: Number,
    material: [{
        matName: String,
        matQuantum: String
    }],
    cook: [{
        image: String,
        note: String
    }]
  }
);
var foodModel = mongoose.model("Food", foodSchema);

module.exports = foodModel;
