import InstituicaoModel from "../Models/InstituicaoModel.js";

export async function createInstitution(
  id,
  nome,
  cnpj,
  descricao,
  agencia,
  conta,
  pix,
  telefone,
  cep,
  identificador,
  logomarca,
  site,
  verificado
) {
  try {
    const instituicao = await InstituicaoModel.create({
        id,
        nome,
        cnpj,
        descricao,
        agencia,
        conta,
        pix,
        telefone,
        cep,
        identificador,
        logomarca,
        site,
        verificado
    });
    return instituicao;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getInstituicao() {
  try {
    const instituicoes = await InstituicaoModel.findAll({});
    return instituicoes;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getInstituicaoById(id) {
  try {
    const instituicao = await InstituicaoModel.findAll({
      where: {
        id: id,
      },
    });
    return instituicao;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateInstituicao(id, nome, descricao, telefone, cep, logomarca, site, pix ) {
  try {
    const  instituicao = await InstituicaoModel.update(
      {
        where: {
          id: id,
        },
      },
      {
        nome: nome,
        descricao: descricao,
        telefone: telefone,
        cep: cep, 
        logmarca: logomarca,
        site: site,
        pix: pix,
      }
    );
    return instituicao;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteInstituicao(id) {
  try {
    const instituicao = await InstituicaoModel.update(
      {
        where: {
          id: id,
        },
      },
      {
        suspend: true,
      }
    );
    return instituicao;
  } catch (e) {
    throw new Error(e.message);
  }
}
