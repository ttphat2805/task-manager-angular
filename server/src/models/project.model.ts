import mongoose, { Document, Schema } from "mongoose";

const ProjectSchema: Schema = new Schema({
  name: { type: String, required: true },
  dateStart: { type: String, required: true },
  dateEnd: { type: String, required: true },
  price: { type: String, required: true },
  leader: { type: String, required: true, ref: "Member" },
  member: [{ type: Schema.Types.ObjectId, ref: "Member" }],
  status: { type: Number, required: true },

  timestamp: {
    type: "date",
    default: Date.now(),
  },
});

export default mongoose.model("Project", ProjectSchema);
