import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  duration: { type: Number, required: true }, // in minutes
  preferredTimeSlots: [{ type: String }],
});

export default mongoose.model("Course", courseSchema);
