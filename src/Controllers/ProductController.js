import { createProductTargetService } from "../Services/Products/createProductTarget.service.js";
import { listProductsByIdTargetService } from "../Services/Products/listProductsByIdTarget.service.js";
import { listProductByIdService } from "../Services/Products/listProductById.service.js";
import { updateProductTargetByIdService } from "../Services/Products/updateProductTarget.service.js";
import { deleteProductTargetByIdService } from "../Services/Products/deleteProductById.service.js";

export async function postProduct(request, response){
	const { name, value, id_target } = request.body;
	try {
		const products = await createProductTargetService(name, value, id_target);
		response.status(200).json(products);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getProductById(request, response){
	const { id } = request.params;
	try {
		const products = await listProductByIdService(id);
		response.status(200).json(products);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getProductsByIdTarget(request, response){
	const { id_target } = request.params;
	const { page } = request.query;
	try {
		const products = await listProductsByIdTargetService(id_target, page);
		response.status(200).json(products);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putProducts(request, response){
	const { id } = request.params;
	const { name, value } = request.body;
	try {
		const product = await updateProductTargetByIdService(id, name, value);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteProduct(request, response){
	const { id } = request.params;
	try {
		const product = await deleteProductTargetByIdService(id);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}