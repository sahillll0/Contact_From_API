import { ContactFrom } from "../moduls/contactFrom.modul.js"

export const sendMessage = async (req, res)=>{
 try {
    console.log("User from token:", req.user);
    console.log("Request body:", req.body);
    
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Use logged-in user's info from token
    const newContact = new ContactFrom({
      name: req.user.name,
      email: req.user.email,
      message,
      createdBy: req.user.userId
    })
    
    console.log("Saving contact:", newContact);
    await newContact.save()

    res.status(200).json({ message: "Message sent successfully", contact: newContact })

  } catch (error) {
    console.log("Contact form error:", error);
    res.status(500).json({ message: "Server Error", error: error.message })
  }
}