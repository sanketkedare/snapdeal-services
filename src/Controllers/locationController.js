const Pincode = require("../Model/pincodeSchema");

// Controller to get location details by PIN code
const locationController = async (req, res) => {
  try {
    const { pin } = req.params;

    // Find location data by PIN code
    const data = await Pincode.find({ pincode: pin });

    if (data.length === 0) {
      return res.status(404).json({ error: "No data found for the given PIN code" }); // If no data found, respond with an error
    }

    res.status(200).json(data); // Respond with the location data
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
};

module.exports = { locationController };
