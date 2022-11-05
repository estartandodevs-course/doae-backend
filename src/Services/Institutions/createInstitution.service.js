import { createInstitution } from "../../Repositories/InstitutionRepository.js";
import { hashPassword } from "../../Funcs/hashPassword.js";
import { v4 as uuid } from "uuid";
import shortid from "shortid";

export async function createInstitutionService(
  name,
  cnpj,
  description,
  agency,
  count,
  pix,
  phone,
  cep,
  site,
  email,
  password,
  verified = false
) {
  const id = uuid();
  const id_external = shortid();
  const suspend = false;
  const pass = await hashPassword(password);
  try {
    const institution = await createInstitution(
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
      pass
    );
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}
