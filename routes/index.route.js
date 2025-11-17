import express, { json } from "express";
import { authMiddleware } from "../middleware/auth.js";
import { getAllContact } from "../controllers/contact.Controller.js";
import { ragisterUser } from "../controllers/ragister.Controller.js";
import { loginUser } from "../controllers/login.Controller.js";
import { sendMessage } from "../controllers/sendmess.Controller.js";
import { deleteUser } from "../controllers/delete.Controller.js";
import { editPassword } from "../controllers/editPass.controller.js";


const route = express.Router();

route.get("/", (req, res) => {
  res.send("hello....")
})

// Admin 
route.get("/all/admin", getAllContact);


// users
route.post("/ragister", ragisterUser)

route.post("/login", loginUser)

route.post("/contectForm", authMiddleware, sendMessage)

route.delete("/delete", deleteUser)

route.put("/editPassword", editPassword)



export { route }