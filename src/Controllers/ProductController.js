import { createProductMetaService } from "../Services/Products/createProductMeta.service.js";
import { listProductByIdMetaService } from "../Services/Products/listProductsByIdMeta.service.js";
import { listProductByIdService } from "../Services/Products/listProductById.service.js";
import { updateProductMetaByIdService } from "../Services/Products/updateProductMeta.service.js";
import { deleteProductMetaByIdService } from "../Services/Products/deleteProductById.service.js";

export async function postProduct(request, response){
	const { name, value, id_meta } = request.body;
	try {
		const product = await createProductMetaService(name, value, id_meta);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getProductById(request, response){
	const { id } = request.params;
	try {
		const product = await listProductByIdService(id);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getProductByIdMeta(request, response){
	const { id_meta } = request.params;
	const { page } = request.query;
	try {
		const product = await listProductByIdMetaService(id_meta, page);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putProduct(request, response){
	const { id } = request.params;
	const { name, value } = request.body;
	try {
		const product = await updateProductMetaByIdService(id, name, value);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteProduct(request, response){
	const { id } = request.params;
	try {
		const product = await deleteProductMetaByIdService(id);
		response.status(200).json(product);
	} catch (e) {
		response.status(400).json(e.message);
	}
}