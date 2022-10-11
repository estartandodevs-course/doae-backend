import { createMetaService } from '../Services/Metas/createMeta.service';
import { listMetasService } from '../Services/Metas/listMetas.service';
import { listMetaById } from '../Services/Metas/listMetaById.service';
import { listMetaByIdInstitution } from '../Services/Metas/listMetaByIdInstitution.service';
import { updateMetaService } from '../Services/Metas/updateMeta.service'
import { updateByIdCurrentQuantityService } from '../Services/Metas/updateCurrentQuantity.service';
import { deleteMetaService } from '../Services/Metas/deleteMeta.service';

class MetasController {
    constructor(){}
    //cria meta
    async postMeta(request, response){
        const { name, value, current_quantity, id_institution } = request.body;
        const services = new createMetaService()
        const meta = await services.createMeta( name, value, current_quantity, id_institution);
        response.status(meta.status).json(meta.message);
    }
    //lista meta
    async getMetas(request, response){
        const { id } = request.query; //perguntar a natalia pra que serve isso aqui
        const services =  new listMetasService();
        let metas;
    
        metas = await services.listMetas();
        
        response.status(metas.status).json(metas.message);
    }
    //lista meta por id
    async getMetaById(request, response){
        const { id } = request.query;
        const services = new listMetaById(id);
        let meta;
        try {
            meta = await services.listMetaById(id);
            return meta;
            response.status(meta.status).json(meta.message)
        } catch (e) {
            throw new Error(e.message)
        }
    }
    //lista por id da instituição
    async getMetaByIdInstitution(request, response){
        const { id_institution } = request.query;
        const services = new listMetaByIdInstitution(id_institution);
        let meta;
        try {
            meta = await services.listMetaByIdInstitution(id_institution);
            return meta;
            response.status(meta.status).json(meta.message)
        } catch (e) {
            throw new Error(e.message)
        }
    }
    //atualiza/edita a meta
    async putMeta(request, response){
        const { id } = request.params;
        const {  name, value } = request.body;
        const params = {
            name,
            value
        }
        const services = new updateMetaService()
        const meta = await services.updateMeta(id, params);
        response.status(meta.status).json(meta.message);
    }
    //atualiza/edita o current quantity
    //muita duvida daqui pra baixo
    async putCurrentQuantity(request, response){
        const { id } = request.params;
        const {  current_quantity } = request.body;
        const params = {
            current_quantity
        }
        const services = new updateByIdCurrentQuantityService()
        const meta = await services.updateCurrentQuantity(id, params);
        response.status(meta.status).json(meta.message);
    }
    
    async deleteMeta(request, response){
        const { id } = request.params;
        const services = new deleteMetaService()
        const meta = await services.deleteMeta(id);
        response.status(meta.status).json(meta.message);
    }
}

export default new MetasController();