import {
	createProductsToTargets,
	getProductsToTargetsByIdTarget, getProductsToTargetsByIdTargetAndProduct
} from "../../Repositories/ProductsToTargetsRepository.js";
import { getTargetsByIdInstitution } from "../../Repositories/TargetRepository.js"
import { getProductsByIdInstitution } from "../../Repositories/ProductRepository.js"
import { v4 as uuid } from "uuid";

export async function createProductsToTargetsService(id_target, id_product, id_institution) {
	const id = uuid();
	try {
		const productsIns = await getProductsByIdInstitution(id_institution);
		const targetsIns = await getTargetsByIdInstitution(id_institution);
		const isProductExists = productsIns.map((product)=>{
			return product.id === id_product;
		})
		const isTargetExists = targetsIns.map((target)=>{
			return target.id === id_target;
		})
		if (isTargetExists.length < 1 || isProductExists.length < 1) {
			throw new Error('Meta ou Produto inexistente.');
		}
		const relation = await getProductsToTargetsByIdTargetAndProduct(id_target, id_product);
		if(relation){
			throw new Error("Esse produto já está associado a essa meta.");
		}
		const products = await getProductsToTargetsByIdTarget(id_target);
		if (products.length > 10) {
			throw new Error("Essa meta ja atingiu o máximo de produtos.");
		}
		return [];
		const relations = await createProductsToTargets(id, id_target, id_product);
		return relations;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
