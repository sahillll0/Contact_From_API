import { ContactFrom } from "../moduls/contactFrom.modul.js";
import { User } from "../moduls/user.Model.js";


export const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            })
        }

        const users = await User.findOne({ email });
        if (!users) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        await User.deleteOne({ email });
        await ContactFrom.deleteOne({email})

        res.status(201).json({
            message: "User Deleted Succsefully"
        })

        console.log("User Deleted :", users);


    } catch (error) {
        console.log("Error :", error);

        res.status(500).json({
            message: "Server Error"
        })
    }
}