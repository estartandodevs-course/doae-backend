import { getUsers } from "../../Repositories/UserRepository.js";

export async function listUsersService(page = 1) {
	const perPage = 10;
	let initPage = page * perPage - perPage;
	try {
		const usersInString = await getUsers();
		const users = [];
		usersInString.map((user)=>{
			const json = user.toJSON();
			users.push(json);
		})
		const response = users.slice(initPage, initPage + perPage);
		let pagination;
		if (response.length > 0) {
			pagination = response;
		} else {
			pagination = response.slice(response.length - 10, 10);
		}

        const newPagination = [];
		
		for (let i = 0; i < pagination.length; i++) {
            const newUser = {
                id: pagination[i].id,
				name: pagination[i].name,
				email: pagination[i].email
            };
			newPagination.push(newUser);
		}
        return newPagination;
	} catch (e) {
		throw new Error(e.message);
	}
}