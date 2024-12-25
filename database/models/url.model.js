import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    originalUrl:String,
    shortUrl:{
        type: String,
        unique: true,
    }
})

export const Url = mongoose.model("Url", urlSchema);