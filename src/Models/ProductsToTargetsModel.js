import mongoose from "mongoose";

const productsToTargetsSchema = new mongoose.Schema({
    id: String,
    id_target: String,
    id_productsToTargets: String
}, {
    timestamps: true
})

const ProductsToTargetsModel = mongoose.model('ProductsToTargets', productsToTargetsSchema);

export default ProductsToTargetsModel;