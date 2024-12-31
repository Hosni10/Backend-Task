import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  originalUrl: { type: String, required: true },
  smallid: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: false,
  },
  numberOfVisits:{
    type: Number,
    default: 0,
    required: false,
  }
});

export const Url = mongoose.model("Url", urlSchema);
