import connectDB from "./config/db.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import topicRoutes from './routes/topicRoutes.js';
dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/topics",topicRoutes);
const PORT=process.env.PORT;
app.listen(PORT,()=>console.log("Running"));