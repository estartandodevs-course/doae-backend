import mongoose from "mongoose";

const postagensSchema = new mongoose.Schema({
    id: String,
    midia: String,
    descricao: String,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const PostagensModel = mongoose.model('Postagens', postagensSchema);

export default PostagensModel;