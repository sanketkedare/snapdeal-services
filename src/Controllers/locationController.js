const Pincode = require("../Model/pincodeSchema");
const data = require('../Data/PincodeData.json')

const setPincodeData = async(req,res)=>
{
  try 
  {
    await Pincode.deleteMany();
    const result = await Pincode.insertMany(data);
    res.status(200).json(result);
    
  } 
  catch (error) 
  {
    res.status(500).json({error: error.message});
    
  }

}

const locationController = async (req, res) => {
  try {
    const { pin } = req.params;
    const data = await Pincode.findOne({ pincode: pin });

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

module.exports = { locationController , setPincodeData};
