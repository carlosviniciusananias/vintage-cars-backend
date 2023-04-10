import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  car_name: String,
  car_year: Date,
  car_model: String,
  car_brand: String,
});

const Car = mongoose.model("Car", CarSchema);

export default Car;
