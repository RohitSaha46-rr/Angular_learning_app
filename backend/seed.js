import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import Topic from './models/topics.js';

dotenv.config();
connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
const seedData=async()=>{
    try{
    await Topic.deleteMany();
    await Topic.insertMany(topics);
    console.log("Data inserted");
    process.exit();
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}
seedData();