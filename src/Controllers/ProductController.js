import { createProductService } from "../Services/Products/createProduct.service.js";
import { listProductByIdService } from "../Services/Products/listProductById.service.js";
import { listProductByIdInstitutionService } from "../Services/Products/listProductByIdInstitution.service.js";
import { updateProductByIdService } from "../Services/Products/updateProduct.service.js";
import { deleteProductByIdService } from "../Services/Products/deleteProductById.service.js";

export async function postProduct(request, response){
	const { name, value, id_institution } = request.body;
	try {
		const products = await createProductService(name, value, id_institution);
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

export async function getProductsByIdInstitution(request, response){
	const { id_institution } = request.params;
	const { page } = request.query;
	try {
		const products = await listProductByIdInstitutionService(id_institution, page);
		response.status(200).json(products);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putProducts(request, response){
	const { id } = request.params;
	const { name, value } = request.body;
	try {
		const product = await updateProductByIdService(id, name, value);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteProduct(request, response){
	const { id } = request.params;
	try {
		const product = await deleteProductByIdService(id);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}