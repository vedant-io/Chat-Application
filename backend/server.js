import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import messagesRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectToMongoDb from "./db/database.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
// res.send("Hello World");
// });

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running on port ${PORT}`);
});
