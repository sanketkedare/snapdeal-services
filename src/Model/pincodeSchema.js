const mongoose = require("mongoose");

// Schema for Pincode
const pincodeSchema = new mongoose.Schema({
  officeName: String,
  pincode: {
    type: Number,
    index: true, // Index for faster search
  },
  taluk: String,
  districtName: String,
  stateName: String,
});

const Pincode = mongoose.model("Pincodes", pincodeSchema);

module.exports = Pincode;
