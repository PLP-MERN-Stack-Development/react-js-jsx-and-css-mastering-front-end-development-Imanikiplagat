import Product from "../models/product.js";

// GET all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    console.log("Creating product:", req.body);

    const newProduct = new Product({ name, price, description, image });
    const savedProduct = await newProduct.save();

    console.log("✅ Product saved:", savedProduct);
    return res.status(201).json(savedProduct); // ✅ Only one response here
  } catch (err) {
    console.error("❌ Error saving product:", err);
    return res.status(400).json({ message: err.message }); // ✅ Only one response
  }
};


// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
