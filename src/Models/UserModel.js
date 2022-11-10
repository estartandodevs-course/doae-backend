import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    suspend: Boolean
}, {
    timestamps: true
})

const UserModel = mongoose.model('Target', userModel);

export default UserModel;