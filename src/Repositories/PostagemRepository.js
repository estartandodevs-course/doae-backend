import PostagensModel from "../Models/PostagensModel.js";

export async function createPostagem(
	id,
	descricao,
	instituicao,
	id_instituicao
) {
	try {
		const newPostagem = await PostagensModel.create({
			id,
			descricao,
			instituicao,
			id_instituicao,
			suspend: false,
		});
		return newPostagem;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateMidiaPostagem(
	id,
	midia
) {
	try {
		const newPostagem = await PostagensModel.updateOne(
		{
			id: id	
		},
		{
			midia: midia
		}
		);
		return newPostagem;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getPostagemById(id) {
	try {
		const postagem = await PostagensModel.findOne({
			id: id,
			suspend: false,
		});
		return postagem;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getPostagemByIdInstituicao(idInstituicao) {
	try {
		const postagens = await PostagensModel.find({
			id_instituicao: idInstituicao,
			suspend: false,
		});
		return postagens;
	} catch (e) {
		throw new Error(e.message);
	}
}


export async function updatePostagemById(id, descricao) {
	try {
		const updatePostagem = await PostagensModel.updateOne(
			{
				id: id,
				suspend: false,
			},
			{ descricao }
		);
		return updatePostagem;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deletePostagemById(id) {
	try {
		const deletePostagem = await PostagensModel.updateOne(
			{ id: id, suspend: false },
			{ suspend: true }
		);
		return deletePostagem;
	} catch (e) {
		throw new Error(e.message);
	}
}
