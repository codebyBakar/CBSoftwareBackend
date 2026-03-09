import jwt from "jsonwebtoken";

const JWT_SECRET = "secret123";

export const verifyToken = (req,res,next)=>{

  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({message:"No token"});
  }

  try{

    const decoded = jwt.verify(token.split(" ")[1],JWT_SECRET);

    req.user = decoded;

    next();

  }catch(error){
    res.status(401).json({message:"Invalid token"});
  }

};