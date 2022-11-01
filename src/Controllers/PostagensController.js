import { createPostagemService } from "../Services/Postagens/createPostagem.service.js";
import { deletePostagemByIdService } from "../Services/Postagens/deletePostagem.service.js";
import { listPostagemByIdService } from "../Services/Postagens/listPostagemById.service.js";
import { listPostagemByIdInstituicaoService } from "../Services/Postagens/listPostagemByIdinstituicao.service.js";
import { updatePostagemByIdService } from "../Services/Postagens/updatePostagem.service.js";
import { updateMidiaPostagemService } from "../Services/Postagens/updateMidiaPostagem.service.js";

export async function postPostagem(request, response) {
  const { midia, descricao, id_instituicao } = request.body;
  try {
    const postagem = await createPostagemService(midia, descricao, id_instituicao);
    response.status(200).json(postagem);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function getPostagemById(request, response) {
	const { id } = request.params;
	try {
		const postagem = await listPostagemByIdService(id);
		response.status(200).json(postagem);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getPostagemByIdInstituicao(request, response) {
	const { page } = request.query;
	const { id_institution } = request.params;
	console.log(id_institution);
	try {
		const postagem = await listPostagemByIdInstituicaoService(id_institution, page);
		response.status(200).json(postagem);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putPostagem(request, response) {
	const { id } = request.params;
	const { midia, descricao } = request.body;
	try {
		const postagem = await updatePostagemByIdService(midia, descricao);
		response.status(200).json(postagem);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putMidiaPostagem(request, response) {
	const { id } = request.query;
	const midia = request.file;
    const path = midia.path;
    
	try {
		const postagem = await updateMidiaPostagemService(id, path);
		response.status(200).json(postagem);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deletePostagem(request, response) {
	const { id } = request.params;
	try {
		const postagem = await deletePostagemByIdService(id);
		response.status(200).json(postagem);
	} catch (e) {
		response.status(400).json(e.message);
	}
}