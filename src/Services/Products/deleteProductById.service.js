import { deleteProductTargetById } from "../../Repositories/ProductTargetRepository.js";

export async function deleteProductTargetByIdService(id){
    try {
        const deleteTarget = await deleteProductTargetById(id);
        return deleteTarget;
    } catch(e){
        console.log(e);
        throw new Error(e.message);
    }
}