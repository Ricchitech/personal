import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const password = "Suchi@Bharath123";
  const encodedpassword = encodeURIComponent(password);
  const uri = `mongodb+srv://brg2289:${encodedpassword}@pws.bfmnx.mongodb.net/pws?retryWrites=true&w=majority&appName=pws`;
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
