import Product from "../models/Product.js";


// ADD PRODUCT
export const addProduct = async (req, res) => {
  try {

    const { name, category, description, price, quantity, status } = req.body;

    let image = "";

    if (req.file) {
      image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    const product = await Product.create({
      name,
      category,
      description,
      price,
      quantity,
      status,
      image
    });

    res.json(product);

  } catch (err) {
    console.log("ADD PRODUCT ERROR:", err);
    res.status(500).json({ message: "Error adding product" });
  }
};


// GET ALL PRODUCTS
export const getProducts = async (req, res) => {

  try{

    const products = await Product
      .find()
      .populate("category","name");

    res.json(products);

  }catch(error){

    res.status(500).json({
      message:"Error fetching products"
    });

  }

};



// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category", "name");
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};



// DELETE PRODUCT
export const deleteProduct = async (req, res) => {

  try {

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error deleting product"
    });

  }

};



// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {

    const { name, category, description, price, quantity, status } = req.body;

    const data = {
      name,
      category,
      description,
      price,
      quantity,
      status
    };

    if (req.file) {
      data.image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    res.json(product);

  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({ message: "Update failed" });
  }
};