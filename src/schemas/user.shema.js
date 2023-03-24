import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    _id: { type: String, _id: false },
    name: { type: String, require: true, minLength: 2, maxLength: 20 },
    surname: { type: String, require: true, minLength: 4, maxLength: 50 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

const UserModel = model("users", UserSchema);

export default UserModel;
