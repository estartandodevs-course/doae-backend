import { updateProductTargetById } from "../../Repositories/ProductTargetRepository.js";

export async function updateProductTargetByIdService(id, name, value){
    try {
        const updateTarget = await updateProductTargetById(id, name, value);
        return updateTarget;
    } catch(e){
        console.log(e);
        throw new Error(e.message);
    }
}