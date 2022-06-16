import mongoose, { Document, Schema } from "mongoose";

const MemberSchema: Schema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: String, required: true },
  area: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: Number, required: true },

  timestamp: {
    type: "date",
    default: Date.now(),
  },
});

export default mongoose.model("Member", MemberSchema);
