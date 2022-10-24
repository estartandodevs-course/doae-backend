import mongoose from "mongoose";

const produtoMetaSchema = new mongoose.Schema({
    id: String,
    name: String,
    value: Number,
    id_meta: String,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const ProdutoMetaModel = mongoose.model('Produto', produtoMetaSchema);

export default ProdutoMetaModel;