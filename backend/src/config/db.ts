import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "localhost");
    console.log("Mongodb connected ");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error connecting mongodb:", error.message);
    }
    process.exit(1);
  }
};

export default connectDb;
