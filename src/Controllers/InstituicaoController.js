import { createInstituicaoService } from "../Services/Instituicoes/createInstituicao.service.js";
import { deleteInstituicaoByIdService } from "../Services/Instituicoes/deleteInstituicao.service.js";
import { listInstituicaoService } from "../Services/Instituicoes/listInstituicoes.service.js";
import { listInstituicaoByIdService } from "../Services/Instituicoes/listInstituicaoById.service.js";
import { updateInstituicaoByIdService } from "../Services/Instituicoes/updateInstituicao.service.js";
import { updateFotoInstituicaoService } from "../Services/Instituicoes/updatePhoto.service.js";

export async function postInstituicao(request, response) {
  const {
    nome,
    cnpj,
    email,
    password,
    descricao,
    agencia,
    conta,
    pix,
    telefone,
    cep,
    site,
    verificado
  } = request.body;
  try {
    const instituicao = await createInstituicaoService(
      nome,
      cnpj,
      descricao,
      agencia,
      conta,
      pix,
      telefone,
      cep,
      site,
      email,
      password,
      verificado
    );
    response.status(200).json(instituicao);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function updateFotoInstituicao(request, response) {
  const { id } = request.query;
  const logomarca = request.file;
  const path = logomarca.path;
  try {
    const instituicao = await updateFotoInstituicaoService(id, path);
    response.status(200).json(instituicao);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//lista todas
export async function getInstituicao(request, response) {
  const { page } = request.query;
  try {
    const instituicoes = await listInstituicaoService(page);
    response.status(200).json(instituicoes);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//lista por id
export async function getInstituicaoById(request, response) {
  const { id } = request.params;
  try {
    const instituicao = await listInstituicaoByIdService(id);
    response.status(200).json(instituicao);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//atualiza a instituicao
export async function putInstituicao(request, response) {
  const { id } = request.params;
  const {
    nome,
    descricao,
    telefone,
    cep,
    site,
    pix,
    agencia,
    conta,
  } = request.body;
  try {
    const instituicao = await updateInstituicaoByIdService(
      id,
      nome,
      descricao,
      telefone,
      cep,
      site,
      pix,
      agencia,
      conta
    );
    response.status(200).json(instituicao);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//deleta instituicao
export async function deleteInstituicaoById(request, response) {
	const { id } = request.params;
	try {
		const instituicao = await deleteInstituicaoByIdService(id);
		response.status(200).json(instituicao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}
