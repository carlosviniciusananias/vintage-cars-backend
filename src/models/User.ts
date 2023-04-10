import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user_name: String,
  user_car: String,
  user_address: String,
  user_password: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
