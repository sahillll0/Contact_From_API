import { User } from "../moduls/user.Model.js";
import {  hashPassword } from "../utils/hashPassword.js";


export const ragisterUser = async (req, res)=>{
  try {
      console.log("Request body:", req.body);
      const { name, email, password } = req.body;
      console.log("Extracted values - name:", name, "email:", email, "password:", password);
  
      // Validate required fields
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
      }
  
      const Users = await User.findOne({ email });
      if (Users) {
        return res.status(400).json({ message: "This Email Is Already Exists" })
      }
  
      const hashpass = await hashPassword(password)
      const newUser = new User({ name, email, password: hashpass })
      await newUser.save();
  
      res.status(200).json({ message: "User created ", newUser })
  
    } catch (error) {
      console.log("Error:", error);
      res.status(400).json({ message: "Failed to create user", error: error.message })
    }
  
}