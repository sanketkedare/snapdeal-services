const Short = require("../Model/shortSchema");

const getAllShortProducts = async (req, res) => {
  try {
    const { userEmail } = req.body;
    const userShort = await Short.findOne({ user: userEmail });
    if (!userShort) {
      return res.status(404).json({ message: 'No products found for this user' });
    }
    res.status(200).json(userShort.short);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToshort = async (req, res) => {
  try {
    const { userEmail, productId } = req.body;

    // Find the short associated with the user
    let userShort = await Short.findOne({ user: userEmail });

    if (!userShort) {
      // If no short exists, create a new one
      userShort = new Short({ user: userEmail, short: [] });
    }

    // Add the new product to the short
    userShort.short.push(productId);

    // Save the updated short to the database
    await userShort.save();

    res.status(201).json({ message: "short updated successfully" });
  } catch (error) {
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
