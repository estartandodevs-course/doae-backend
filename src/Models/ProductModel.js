import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    value: Number,
    id_target: String,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;