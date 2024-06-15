const Cart = require("../Model/cartSchema");

const getAllCartProducts = async (req, res) => {
  try {
    const userEmail = req.body;
    const { cart } = await Cart.findOne({ user: userEmail });
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { userEmail, productId } = req.body;

    // Find the cart associated with the user
    let userCart = await Cart.findOne({ user: userEmail });

    if (!userCart) 
    {
      // If no cart exists, create a new one
      userCart = new Cart({ user: userEmail, cart: [] });
    }

    // Add the new product to the cart
    userCart.cart.push(productId);

    // Save the updated cart to the database
    await userCart.save();

    res.status(201).json({ message: "Cart updated successfully" });

  } 
  catch (error) {res.status(500).json({ message: error.message })}
};

const removeFromCart = async (req, res) => {
    try {
        const { userEmail, productId } = req.body;
        const userCart = await Cart.findOne({ user: userEmail });
        
        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Find the product in the cart and remove it
        const productIndex = userCart.cart.findIndex(item => item._id.toString() === productId);
        
        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        // Remove the product from the cart
        userCart.cart.splice(productIndex, 1);
        
        // Save the updated cart to the database
        await userCart.save();

        res.status(200).json({ message: 'Product removed from cart successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllCartProducts, addToCart, removeFromCart };
