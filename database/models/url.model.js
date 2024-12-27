import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  originalUrl: String,
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
  },
});

export const Url = mongoose.model("Url", urlSchema);
