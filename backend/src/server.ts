import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDb from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet()); // to hide server information in http res headers
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "CareerBridge API is running" });
});

const startServer = async () => {
  await connectDb(); // since connetDb is async here

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
