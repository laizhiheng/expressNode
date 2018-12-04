
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imgsSchema = new Schema({
    url:String,
});

mongoose.model("imgs", imgsSchema, "imgs");
