import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

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

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;


//routes
app.use("/api/todos", todoRoutes);


app.listen(PORT, () => {
    console.log(`server connected at port: http://localhost:${PORT} `);
})
