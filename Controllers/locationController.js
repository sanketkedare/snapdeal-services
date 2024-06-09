const Pincode = require("../Model/pincodeSchema");

const locationController = async (req, res) => {
  try {
    const { PIN } = req.body;
    if (!PIN) {
      return res.status(400).json({ error: "PIN code is required" });
    }

    const data = await Pincode.findOne({ pincode: PIN });

    if (!data) {
      return res
        .status(404)
        .json({ error: "No data found for the given PIN code" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { locationController };
