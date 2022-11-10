import UserModel from "../Models/UserModel";

export async function createUser(
	id,
	name,
	email,
	password,
	suspend
) {
	try {
		const user = await UserModel.create({
			id,
            name,
            email,
            password,
            suspend
		});
		return user;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getUsers() {
	try {
		const user = await UserModel.find({
			suspend: false
		});
		return user;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getUserById(id) {
	try {
		const user = await UserModel.find({
			id: id,
		});
		return user;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateUser(id, name, email, password) {
	try {
		const user = await UserModel.updateOne(
            {
                id: id,
                suspend: false   
            },
            {
                id, name, email, password
            }
        )
		return user;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteUser(id) {
	try {
		const user = await UserModel.updateOne(
            {
                id: id,
                suspend: false   
            },
            {
                suspend: true
            }
        )
		return user;
	} catch (e) {
		throw new Error(e.message);
	}
}

