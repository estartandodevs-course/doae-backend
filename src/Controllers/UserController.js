import { createUserService } from "../Services/Users/createUser.service.js";
import { deleteUserByIdService } from "../Services/Users/deleteUser.service.js";
import { listUsersService } from "../Services/Users/listUsers.service.js";
import { listUserByIdService } from "../Services/Users/listUserById.service.js";
import { updateUserByIdService } from "../Services/Users/updateUser.service.js";

export async function postUser(request, response) {
  const { 
    name, 
    email, 
    password 
} = request.body;
  try {
    const user = await createUserService(
        name, 
        email, 
        password
    );
    response.status(200).json(user);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function getUsers(request, response) {
  const { page } = request.query;
  try {
    const users = await listUsersService(page);
    response.status(200).json(users);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function getUserById(request, response) {
  const { id } = request.params;
  try {
    const user = await listUserByIdService(id);
    response.status(200).json(user);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function putUser(request, response) {
  const { id } = request.params;
  const { name, email, password } = request.body;
  try {
    const user = await updateUserByIdService(
      name,
      email, 
      password
    );
    response.status(200).json(user);
  } catch (e) {
    console.log(e);
    response.status(400).json(e.message);
  }
}

export async function deleteUserById(request, response) {
  const { id } = request.params;
  try {
    const user = await deleteUserByIdService(id);
    response.status(200).json(user);
  } catch (e) {
    response.status(400).json(e.message);
  }
}
