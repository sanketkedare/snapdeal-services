const Short = require("../Model/shortSchema");

const getAllShortProducts = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;

    const { short } = await Short.findOne({ user: userEmail });
    if (short) {
      res.status(200).json(short);
    } else {
      res.status(404).json({ message: "Shortlist not found", email: userEmail });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToshort = async (req, res) => {
  try {
    const { userEmail, short } = req.body;

    // Check if userEmail is provided
    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    // Find the cart associated with the user
    let userShort = await Short.findOne({ user: userEmail });

    // If no cart exists, create a new one
    if (!userShort) {
      userShort = new Short({ user: userEmail, cart: [] });
    }

    // Update the cart items
    userShort.short = short;

    // Save the updated cart to the database
    await userShort.save();

    // Respond with success message
    res.status(201).json({ message: "Cart updated successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

const removeFromshort = async (req, res) => {
  try {
    const { userEmail, productId } = req.body;
    const userShort = await Short.findOne({ user: userEmail });

    if (!userShort) {
      return res.status(404).json({ message: 'short not found' });
    }

    // Find the product in the short and remove it
    const productIndex = userShort.short.indexOf(productId);

    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in short' });
    }

    // Remove the product from the short
    userShort.short.splice(productIndex, 1);

    // Save the updated short to the database
    await userShort.save();

    res.status(200).json({ message: 'Product removed from short successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllShortProducts, addToshort, removeFromshort };
