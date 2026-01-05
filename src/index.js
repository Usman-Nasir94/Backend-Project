import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import express from "express";
import dotenv from "dotenv";

dotenv.config({path : "./.env"});

const app = express();

// connect DB usig EFI approach means run function emmediately

;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.error("ERROR :", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening at ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR :", error);
        throw error
    }
})()