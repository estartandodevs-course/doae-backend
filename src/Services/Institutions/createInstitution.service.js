import { createInstitution } from "../../Repositories/InstitutionRepository.js";
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
      password
    );
    return institution;
  } catch (e) {
    throw new Error(e.message);
  }
}
