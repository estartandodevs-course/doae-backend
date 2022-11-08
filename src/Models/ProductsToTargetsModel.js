import mongoose from "mongoose";

const productsToTargetsSchema = new mongoose.Schema({
    id: String,
    id_target: String,
    id_product: String
}, {
    timestamps: true
})

const ProductsToTargetsModel = mongoose.model('ProductsToTargets', productsToTargetsSchema);

export default ProductsToTargetsModel;