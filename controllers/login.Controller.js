import { User } from "../moduls/user.Model.js"
import jwt from "jsonwebtoken";
import { comparePassword} from "../utils/hashPassword.js";


export const loginUser = async (req, res)=>{
  try {
      const { email, password } = req.body;
  
      // Validate required fields
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const Users = await User.findOne({ email })
      if (!Users) {
        return res.status(400).json({ message: "incorrect email " })
      }
  
      const match = await comparePassword(password, Users.password)
      if (!match) {
        return res.status(400).json({ message: "password incorrect " })
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: Users._id, email: Users.email, name: Users.name },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
  
      res.status(200).json({
        message: "Login Successfully",
        token,
        user: { name: Users.name, email: Users.email }
      })
    } catch (error) {
      console.log("Error:", error);
      res.status(400).json({ message: "Failed to login", error: error.message })
    }
}