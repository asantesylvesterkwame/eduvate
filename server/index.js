import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        throw err;
    });
};

app.listen(8800,()=>{
    console.log("connected!");
})