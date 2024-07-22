const Cart = require("../Model/cartSchema");

// Controller to get all products in the cart for a user
const getAllCartProducts = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;

    // Find the cart associated with the user
    const { cart } = await Cart.findOne({ user: userEmail });
    if (cart) {
      res.status(200).json(cart); // If cart is found, respond with the cart
    } else {
      res.status(404).json({ message: "Cart not found", email: userEmail }); // If no cart is found, respond with an error
    }
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
};

// Controller to add or update products in the cart for a user
const addToCart = async (req, res) => {
  try {
    const { userEmail, cart } = req.body;

    // Check if userEmail is provided
    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    // Find the cart associated with the user
    let userCart = await Cart.findOne({ user: userEmail });

    // If no cart exists, create a new one
    if (!userCart) {
      userCart = new Cart({ user: userEmail, cart: [] });
    }

    // Update the cart items
    userCart.cart = cart;

    // Save the updated cart to the database
    await userCart.save();

    // Respond with success message
    res.status(201).json({ message: "Cart updated successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

// Controller to remove a product from the cart for a user
const removeFromCart = async (req, res) => {
  try {
    const { userEmail, productId } = req.body;

    // Find the cart associated with the user
    const userCart = await Cart.findOne({ user: userEmail });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart and remove it
    const productIndex = userCart.cart.findIndex(
      (item) => item._id.toString() === productId
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove the product from the cart
    userCart.cart.splice(productIndex, 1);

    // Save the updated cart to the database
    await userCart.save();

    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCartProducts, addToCart, removeFromCart };
