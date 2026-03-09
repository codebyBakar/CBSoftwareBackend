import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "secret123";


// REGISTER ADMIN
export const registerAdmin = async(req,res)=>{
  try{

    const {name,email,password} = req.body;

    const existing = await Admin.findOne({email});

    if(existing){
      return res.status(400).json({message:"Admin already exists"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const admin = await Admin.create({
      name,
      email,
      password:hashedPassword
    });

    res.json({message:"Admin Registered Successfully"});

  }catch(error){
    res.status(500).json({error:error.message})
  }
};



// LOGIN ADMIN
export const loginAdmin = async(req,res)=>{
  try{

    const {email,password} = req.body;

    const admin = await Admin.findOne({email});

    if(!admin){
      return res.status(400).json({
        message:"User not registered"
      });
    }

    const match = await bcrypt.compare(password,admin.password);

    if(!match){
      return res.status(400).json({
        message:"Invalid credentials"
      });
    }

    const token = jwt.sign(
      {id:admin._id},
      JWT_SECRET,
      {expiresIn:"1d"}
    );

    res.json({
      token,
      admin:{
        id:admin._id,
        name:admin.name,
        email:admin.email
      }
    });

  }catch(error){
    res.status(500).json({message:"Server error"});
  }
};