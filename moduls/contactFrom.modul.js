import mongoose, { Schema } from "mongoose";


const contactFromSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true });


export const ContactFrom = mongoose.model("ContactFrom", contactFromSchema)    