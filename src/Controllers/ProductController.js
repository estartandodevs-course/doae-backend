import { createProductMetaService } from "../Services/Products/createProductMeta.service";
import { listProductByIdMetaService } from "../Services/Products/listProductsByIdMeta.service";
import { listProductByIdService } from "../Services/Products/listProductById.service";
import { updateProductMetaById } from "../Repositories/ProductMetaRepository";
import { deleteProductMetaById } from "../Repositories/ProductMetaRepository";

class ProductController {
    constructor(){}
    //cria produto
    async postProduct(request, response){
        const {name, value, id_meta, id_institution } = request.body;
        const services = new createProductMetaService()
        const product = await services.createProductMeta(name, value, id_meta, id_institution);
        response.status(product.status).json(product.message);
    }
    //lista produtos 
    async getProductById(request, response){
        const { id } = request.query;
        const services = new listProductByIdService(id);
        let product;
        try {
            product = await services.listProductByIdService(id);
            return product;
            response.status(product.status).json(product.message)
        } catch (e) {
            throw new Error(e.message)
        }
    }
    //lista por id da meta
    async getMetaByIdMeta(request, response){
        const { id_meta } = request.query;
        const services = new listProductByIdMetaService(id_meta);
        let product;
        try {
            product = await services.listProductByIdMetaService(id_meta);
            return product;
            response.status(product.status).json(product.message)
        } catch (e) {
            throw new Error(e.message)
        }
    }
    //atualiza/edita o produto
    async putProduct(request, response){
        const { id } = request.params;
        const {  name, value } = request.body;
        const params = {
            name,
            value
        }
        const services = new updateProductMetaById()
        const product = await services.updateProductMetaById(id, params);
        response.status(product.status).json(product.message);
    }
    
    async deleteProduct(request, response){
        const { id } = request.params;
        const services = new deleteProductMetaById()
        const product = await services.deleteProductMetaById(id);
        response.status(meta.status).json(meta.message);
    }
}

export default new ProductController();