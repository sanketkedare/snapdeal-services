const mongoose = require("mongoose");

const pincodeSchema = new mongoose.Schema({
  officeName: String,
  pincode: {
    type: Number,
    index: true
  },
  taluk: String,
  districtName: String,
  stateName: String,
});


const Pincode = mongoose.model("pincodes", pincodeSchema);

module.exports = Pincode;
