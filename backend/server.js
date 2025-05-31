import express from "express"
import dotenv from "dotenv";
import connectDB from "./utls/connectDB.js";
import login from "./roues/login-route.js";
import cors from "cors";

const app=express();

dotenv.config();

app.use(express.json());
app.use(cors());

connectDB()

app.get("/",(req,res)=>{
    res.send("Hello from the backend!");
})

app.post("/login",login);

app.listen(process.env.PORT,()=>{
    console.log(`\nServer is running on port http://localhost:${process.env.PORT}\n`);
});