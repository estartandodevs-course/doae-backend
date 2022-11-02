import mongoose from "mongoose";

const productTargetSchema = new mongoose.Schema({
    id: String,
    name: String,
    value: Number,
    id_target: String,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const ProductTargetModel = mongoose.model('Product', productTargetSchema);

export default ProductTargetModel;