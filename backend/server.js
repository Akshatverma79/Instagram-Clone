import express from "express"
import dotenv from "dotenv";
import connectDB from "./utls/connectDB.js";

const app=express();

dotenv.config();

app.use(express.json());

connectDB()

app.get("/",(req,res)=>{
    res.send("Hello from the backend!");
})

app.listen(process.env.PORT,()=>{
    console.log(`\nServer is running on port http://localhost:${process.env.PORT}\n`);
});