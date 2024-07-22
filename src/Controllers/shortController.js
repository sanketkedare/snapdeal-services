const Short = require("../Model/shortSchema");

// Controller to get all short-listed products for a user
const getAllShortProducts = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;

    // Find the short list associated with the user
    const { short } = await Short.findOne({ user: userEmail });
    if (short) {
      res.status(200).json(short); // Respond with the short list
    } else {
      res.status(404).json({ message: "Shortlist not found", email: userEmail }); // If not found, respond with an error
    }
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
};

// Controller to add or update short-listed products for a user
const addToshort = async (req, res) => {
  try {
    const { userEmail, short } = req.body;

    // Check if userEmail is provided
    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    // Find the short list associated with the user
    let userShort = await Short.findOne({ user: userEmail });

    // If no short list exists, create a new one
    if (!userShort) {
      userShort = new Short({ user: userEmail, short: [] });
    }

    // Update the short list items
    userShort.short = short;

    // Save the updated short list to the database
    await userShort.save();

    // Respond with success message
    res.status(201).json({ message: "Shortlist updated successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

// Controller to remove a product from the short list for a user
const removeFromshort = async (req, res) => {
  try {
    const { userEmail, productId } = req.body;

    // Find the short list associated with the user
    const userShort = await Short.findOne({ user: userEmail });

    if (!userShort) {
      return res.status(404).json({ message: 'Shortlist not found' }); // If short list is not found, respond with an error
    }

    // Find the product in the short list and remove it
    const productIndex = userShort.short.indexOf(productId);

    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in shortlist' }); // If product is not found, respond with an error
    }

    // Remove the product from the short list
    userShort.short.splice(productIndex, 1);

    // Save the updated short list to the database
    await userShort.save();

    res.status(200).json({ message: 'Product removed from shortlist successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

module.exports = { getAllShortProducts, addToshort, removeFromshort };
