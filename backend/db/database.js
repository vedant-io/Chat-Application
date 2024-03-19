import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URL);
    console.log("Connected to DATABASE");
  } catch (error) {
    console.log("Error Connecting to the DATABASE", error.message);
  }
};

export default connectToMongoDb;
