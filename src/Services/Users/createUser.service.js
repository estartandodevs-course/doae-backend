import { createUser } from "../../Repositories/UserRepository.js";
import { hashPassword } from "../../Funcs/hashPassword.js";
import { v4 as uuid } from "uuid";
//import { mailto } from "../../Libs/mailto.js";

export async function createUserService(
	id,
    name,
    email,
    password
) {
	const id = uuid();
	const suspend = false;
	const pass = await hashPassword(password);
	try {
		const user = await createUser(
			id,
            name,
            email,
            pass,
            suspend
		);
		//await mailto("bem_vindo", email);
		return user;
	} catch (e) {
		throw new Error(e.message);
	}
}
