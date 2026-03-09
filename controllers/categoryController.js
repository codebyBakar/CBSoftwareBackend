import Category from "../models/Category.js";


// ADD CATEGORY
export const addCategory = async(req,res)=>{

try{

const {name,status} = req.body;

const category = await Category.create({
name,
status
});

res.json(category);

}catch(error){

res.status(500).json({
message:"Error adding category"
})

}

};


// GET ALL CATEGORIES
export const getCategories = async(req,res)=>{

try{

const categories = await Category.find();

res.json(categories);

}catch(error){

res.status(500).json({
message:"Error fetching categories"
})

}

};


// DELETE CATEGORY
export const deleteCategory = async(req,res)=>{

try{

await Category.findByIdAndDelete(req.params.id);

res.json({
message:"Category deleted"
});

}catch(error){

res.status(500).json({
message:"Error deleting category"
})

}

};


// GET SINGLE CATEGORY
export const getSingleCategory = async(req,res)=>{

try{

const category = await Category.findById(req.params.id);

res.json(category);

}catch(error){

res.status(500).json({
message:"Error fetching category"
})

}

};


// UPDATE CATEGORY
export const updateCategory = async(req,res)=>{

try{

const {name,status} = req.body;

const category = await Category.findByIdAndUpdate(
req.params.id,
{name,status},
{new:true}
);

res.json(category);

}catch(error){

res.status(500).json({
message:"Error updating category"
})

}

};