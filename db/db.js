import mongoose from "mongoose";

const connectDB = async () => {
   try {
      const connection = await mongoose.connect(`${process.env.MONGO_DB_URL}${process.env.DB_NAME}`)
      console.log(`mongoDB connected ${connection.connection.host}`);

   } catch (error) {
      console.log(`mongoDB connection Error ${error}`);

   }
}

export { connectDB }