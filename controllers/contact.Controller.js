import { ContactFrom } from "../moduls/contactFrom.modul.js";

export const getAllContact = async (req, res)=>{
  try {
    const message = await ContactFrom.find().sort({createdAt: -1});

    res.status(200).json({
        sucess: true,
        total:message.length,
        data:message
    })

  } catch (error) {
    res.status(500).json({
        sucess:false,
        message: "Server error while fetching contacts",
        error: error.message
    })
  }
}