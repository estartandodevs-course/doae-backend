import InstitutionModel from "../Models/InstitutionModel.js";

export async function createInstitution(
  id,
  name,
  cnpj,
  description,
  agency,
  count,
  pix,
  phone,
  cep,
  id_external,
  site,
  verified,
  suspend,
  email,
  password
) {
  try {
    const institution = await InstitutionModel.create({
      id,
      name,
      cnpj,
      description,
      agency,
      count,
      pix,
      phone,
      cep,
      id_external,
      site,
      verified,
      suspend,
      email,
      password,
      suspend,
    });
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getInstitutions() {
  try {
    const institutions = await InstitutionModel.findAll({
      where: {
        suspend: false,
      },
    });
    return institutions;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getInstitutionById(id) {
  try {
    const institution = await InstitutionModel.findAll({
      where: {
        id: id,
        suspend: false,
      },
    });
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getInstitutionByIdExternal(id_external) {
  try {
    const institution = await InstitutionModel.findAll({
      where: {
        id_external: id_external,
        suspend: false,
      },
    });
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getInstitutionByEmail(email) {
  try {
    const institution = await InstitutionModel.findAll({
      where: {
        email: email,
        suspend: false,
      },
    });
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateInstitution(
  id,
  name,
  description,
  phone,
  cep,
  site,
  pix,
  agency,
  count
) {
  try {
    const insitution = await InstitutionModel.update(
      {
        name,
        description,
        phone,
        cep,
        site,
        pix,
        agency,
        count,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateInstitutionLogo(id, logo) {
  try {
    const institution = await InstitutionModel.update(
      {
        logo,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteInstitution(id) {
  try {
    const institution = await InstitutionModel.update(
      {
        suspend: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}
