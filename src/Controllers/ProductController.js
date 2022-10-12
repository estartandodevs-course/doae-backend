import { createProductMetaService } from "../Services/Products/createProductMeta.service";
import { listProductByIdMetaService } from "../Services/Products/listProductsByIdMeta.service";
import { listProductByIdService } from "../Services/Products/listProductById.service";
import { updateProductMetaByIdService } from "../Repositories/ProductMetaRepository";
import { deleteProductMetaByIdService } from "../Repositories/ProductMetaRepository";

export async function postProduct(request, response){
  const { name, value, id_meta, id_institution } = request.body;
  try {
    const product = await createProductMetaService(name, value, id_meta, id_institution);
    response.status(200).json(product);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function getProductById(request, response){
    const { id } = request.params;
    try {
      const product = await listProductByIdMetaService(id);
      response.status(200).json(product);
    } catch (e) {
      response.status(400).json(e.message);
    }
}

export async function getProductByIdMeta(request, response){
  const { id_meta } = request.params;
  try {
    const product = await listProductByIdService(id_meta);
    response.status(200).json(product);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function putProduct(request, response){
  const { id } = request.body;
  const { name, value } = request.body
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