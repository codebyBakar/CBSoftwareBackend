export const getDashboard = async (req,res)=>{

  try{

    res.json({
      message:"Welcome to Admin Dashboard",
      admin:req.admin
    });

  }catch(err){

    res.status(500).json({
      message:"Server Error"
    });

  }

};