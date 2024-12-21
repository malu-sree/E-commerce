// controllers/cartController.js
const Cart = require('../models/cartModel'); // Import the Cart model
const Product = require('../models/productModel'); // Import the Product model (for validation)

// Add a product to the cart
const addProductToCart = async (req, res) => {
    const { userId } = req.body;
    const { productId, quantity } = req.body;

    try {
        // Check if the product exists
        const productExists = await Product.findById(productId);
        if (!productExists) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Find the user's cart or create one if it doesn't exist
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        // Check if the product is already in the cart
        const cartItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (cartItemIndex > -1) {
            // Update the quantity if the product is already in the cart
            cart.items[cartItemIndex].quantity += quantity;
        } else {
            // Add the new product to the cart
            cart.items.push({ productId, quantity });
        }

        // Save the updated cart
        await cart.save();
        res.status(200).json({ message: "Product added to cart", cart });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Get all items in the cart for a specific user
const getCartItems = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId', 'name price');
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json({ cart });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Remove a product from the cart
const removeProductFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Filter out the product to remove it
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        // Save the updated cart
        await cart.save();
        res.status(200).json({ message: "Product removed from cart", cart });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

module.exports = {
    addProductToCart,
    getCartItems,
    removeProductFromCart
};

