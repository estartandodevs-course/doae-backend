import { getUserById } from "../../Repositories/UserRepository.js";

export async function listUserByIdService(id) {
	try {
		const [ user ] = await getUserById(id);
		if (user === undefined) {
			throw new Error('Usuário não foi encontrada.')
		}
		const json = user.toJSON();
		return {
			id: json.id,
			email: json.email,
			name: json.name,
		};
	} catch (e) {
		throw new Error(e.message);
	}
}