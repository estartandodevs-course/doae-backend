import connectDatabase from "../Config/mongodb";
import mongoose from "mongoose";

const meta = mongoose.model('Meta', {
    id: String,
    name: String,
    value: Float,
    current_quantity: Float,
    id_institution: String
})

export default meta;