import config from "../Configs/cloudnary.js";
import { v2 as cloudinary } from "cloudinary";

export async function uploadImage(path) {
	cloudinary.config(config);
	let source;
	await cloudinary.uploader
		.upload(path)
		.then((res) => {
			source = res;
		})
		.catch((e) => {
			throw new Error("Não foi possível fazer upload da foto.");
		});
	return source;
}