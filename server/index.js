import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()

const connect =>{
    mongoose.connect("")
}

app.listen(8800,()=>{
    console.log("connected!");
})