import mongoose from "mongoose";

const metaSchema = new mongoose.Schema({
    id: String,
    name: String,
    value: Float,
    current_quantity: Float,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const MetaModel = mongoose.model('Meta', metaSchema);

export default MetaModel;