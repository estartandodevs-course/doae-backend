import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    id: String,
    midia: String,
    description: String,
    id_institution: String,
    suspend: Boolean
}, {
    timestamps: true
})

const PublicationModel = mongoose.model('Publications', publicationSchema);

export default PublicationModel;