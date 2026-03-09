import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
{
  name:{
    type:String,
    required:true,
    unique:true
  },
  status:{
    type:String,
    default:"active"
  }
},
{timestamps:true}
);

export default mongoose.model("Category",categorySchema);