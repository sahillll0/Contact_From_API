import { User } from "../moduls/user.Model.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";



export const editPassword = async (req , res)=>{
    try {
        const {email , oldPass, newPass} = req.body;

    if(!email || !oldPass || !newPass){
        res.status(401).json({message : "Email OldPassword  and newPassword are required"})
    }

    const Users = await User.findOne({email});
    if(!Users){
        res.status(402).json({message : "Email Not Found"})
    }

    const isMatch = await comparePassword(oldPass, Users.password);
    if(isMatch){
        return res.status(400).json({message:"Incorrect old password"})
    }

     if(newPass.length < 6){
          return res.status(400).json({message:"Password must be at least 6 characters"});
     }

     const hashpass = await hashPassword(newPass);
     Users.password = hashpass
     await Users.save();

     res.status(201).json({
        message:"Password updated successfully"
     })
    } catch (error) {
        console.log("error" , error);
        
        res.status(500).json({
            message : "server Error"
        })
    }
}