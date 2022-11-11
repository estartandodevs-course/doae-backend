import { createProductsToTargetsService } from "../Services/ProductsToTargets/createProductsToTargets.service.js"
import { listProductsToTargetsByIdProductService } from "../Services/ProductsToTargets/listProductsToTargetsByIdProduct.service.js"
import { listProductsToTargetsByIdTargetService } from "../Services/ProductsToTargets/listProductsToTargetsByIdTarget.service.js"
import { listProductsToTargetsByIdTargetAndProductService } from "../Services/ProductsToTargets/listProductsToTargetsByIdTargetAndProduct.service.js"
import { deleteProductsToTargetsService } from "../Services/ProductsToTargets/deleteProductsToTargets.service.js"

export async function postProductsToTargets(request, response){
    const { id_target, id_product, id_institution } = request.body;
    try {
        const relation = await createProductsToTargetsService(id_target, id_product, id_institution);
        response.status(201).json(relation); 
    }  catch (e) {
        response.status(400).send("Não foi possível associar esse produto a meta.");
    }
}

export async function getProductsToTargetsByIdTarget(request, response){
    const { id_target } = request.params;
    try {
        const relations = await listProductsToTargetsByIdTargetService(id_target);
        response.status(200).json(relations); 
    } catch (e) {
        response.status(400).send("Não foi possível listar esses produtos.");
    }
}

export async function getProductsToTargetsByIdProduct(request, response){
    const { id_product } = request.params;
    try {
        const relations = await listProductsToTargetsByIdProductService(id_product);
        response.status(200).json(relations); 
    } catch (e) {
        response.status(400).send("Não foi possível listar esses produtos.");
    }
}

export async function getProductsToTargetsByIdTargetAndProduct(request, response){
    const { id_target, id_product } = request.body;
    try {
        const relations = await listProductsToTargetsByIdTargetAndProductService(id_target, id_product);
        response.status(200).json(relations); 
    } catch (e) {
        response.status(400).send("Não foi possível buscar esse produto.");
    }
}

export async function deleteProductsToTargetsById(request, response){
    const { id } = request.params;
    try {
        const relation = await deleteProductsToTargetsService(id);
        response.status(200).json(relation); 
    } catch (e) {
        response.status(400).send("Não foi possível excluir esse produto.");
    }
}