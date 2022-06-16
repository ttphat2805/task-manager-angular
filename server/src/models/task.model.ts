import mongoose, { Document, Schema } from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true },
  status: { type: Number, required: true },
  projectId: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
  memberId: { type: Schema.Types.ObjectId, required: true, ref: "Member" },

  timestamp: {
    type: "date",
    default: Date.now(),
  },
});

export default mongoose.model("Task", TaskSchema);
