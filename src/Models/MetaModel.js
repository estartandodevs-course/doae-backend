import mongoose from "mongoose";

const metaSchema = new mongoose.Schema({
    id: String,
    name: String,
    value: Number,
    current_quantity: Number,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const MetaModel = mongoose.model('Meta', metaSchema);

export default MetaModel;