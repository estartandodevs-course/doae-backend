import { deleteProductById } from "../../Repositories/ProductRepository.js";

export async function deleteProductByIdService(id){
    try {
        const deleteTarget = await deleteProductById(id);
        return deleteTarget;
    } catch(e){
        console.log(e);
        throw new Error(e.message);
    }
}