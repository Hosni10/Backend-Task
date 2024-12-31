import mongoose, { Schema } from "mongoose";

const analyticsSchema = mongoose.Schema({
  timestamp: { type: Date, required: true },
  IPaddress: { type: String, required: true },
  urlId: { type: Schema.Types.ObjectId, required: true, ref: "Url" },
});

const analyticsModel = mongoose.model("Analytics", analyticsSchema);

export { analyticsModel };
