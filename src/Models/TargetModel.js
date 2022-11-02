import mongoose from "mongoose";

const targetSchema = new mongoose.Schema({
    id: String,
    name: String,
    target_value: Number,
    current_quantity: Number,
    id_institution: String,
    description: String,
    day_limit: Date,
    suspend: Boolean
}, {
    timestamps: true
})

const TargetModel = mongoose.model('Target', metaSchema);

export default TargetModel;