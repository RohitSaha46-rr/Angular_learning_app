import connectDB from "./config/db.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import topicRoutes from './routes/topicRoutes.js';
import authRoutes from './routes/authRoutes.js';
dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/topics",topicRoutes);
//app.use("/api/progress", progressRoutes);
app.use('/api/auth', authRoutes);
const PORT=process.env.PORT;
app.listen(PORT,()=>console.log("Running"));