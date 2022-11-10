import { updateUser } from "../../Repositories/UserRepository.js";

export async function updateUserByIdService(
	id,
	name,
	email,
    password
) {
	try {
		const user = await updateUser(
			id,
			name,
			email,
            password
		);
        return user;
	} catch (e) {
		throw new Error(e.message);
	}
}