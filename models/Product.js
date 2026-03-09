import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },

  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },

  description:{
    type:String
  },

  price:{
    type:Number,
    required:true
  },

  quantity:{
    type:Number,
    required:true
  },

  image:{
    type:String
  },

  status:{
    type:String,
    enum:["active","inactive"],
    default:"active"
  }

},{timestamps:true});

export default mongoose.model("Product",productSchema);