import { updateProductById } from "../../Repositories/ProductRepository.js";

export async function updateProductByIdService(id, name, value){
    try {
        const updateTarget = await updateProductById(id, name, value);
        return updateTarget;
    } catch(e){
        console.log(e);
        throw new Error(e.message);
    }
}