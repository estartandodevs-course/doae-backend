import mongoose from "mongoose";

const productMetaSchema = new mongoose.Schema({
    id: String,
    name: String,
    value: Number,
    id_meta: String,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const ProductMetaModel = mongoose.model('Product', productMetaSchema);

export default ProductMetaModel;