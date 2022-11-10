import { deleteUser } from "../../Repositories/UserRepository.js";

export async function deleteUserByIdService(id){
    try {
        const user = await deleteUser(id);
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}