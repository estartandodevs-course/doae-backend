import axios from "axios";

export async function getAddressByZipCode(cep) {
	const data = await axios
		.request({
			method: "GET",
			url: `https://viacep.com.br/ws/${cep}/json/`,
		})
		.then((res) => {
			return res.data;
		}).catch((e)=>{
			throw new Error('Não foi possível buscar o CEP.')
		})
	return data;
}
