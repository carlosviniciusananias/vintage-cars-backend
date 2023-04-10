import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  event_name: String,
  event_date: Date,
  event_address: String,
  event_description: String,
  event_award: String,
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
