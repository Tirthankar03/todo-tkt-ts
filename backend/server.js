import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`server connected at port: http://localhost:${PORT} `);
})
