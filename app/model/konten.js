var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var content = new Schema({
  kategori  : {type: String, required: true},
  konten    : {type: String},
  image     : {type: String}
});

module.exports = mongoose.model("konten", content);

