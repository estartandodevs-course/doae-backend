import config from "../Config/cloudnary.js";
import { v2 as cloudinary } from "cloudinary";

async function uploadImage(path){
    cloudinary.config(config)
    let source;
    await cloudinary.uploader
        .upload(path)
        .then(res=>{
            source = res;
            //console.log(res)
        })
        .catch(e=>console.error(e))
    return source;
}


// testes
const result = await uploadImage('src/img/foto.jpg')
console.log(result)

// error
const error = {
    error: [['Error: ENOENT: no such file or directory', 'open C:\\Workspacez\img\foto.png'], {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'open',
      path: 'C:\\Workspace\\img\\foto.png'
    }]
}

// sucess

const sucess = {
    asset_id: '1fb1216820a090bba0f1aa5e9a59c382',
    public_id: 'pe8euufx1pkxevzsrijr',
    version: 1665018797,
    version_id: '92c98f9e90a13795522c25802d9562ba',
    signature: '83144dbda409bd838d1720c61c91ea46a580041f',
    width: 640,
    height: 640,
    format: 'jpg',
    resource_type: 'image',
    created_at: '2022-10-06T01:13:17Z',
    tags: [],
    bytes: 50376,
    type: 'upload',
    etag: '8dec5acdb95c8d22e7eb23a162036510',
    placeholder: false,
    url: 'http://res.cloudinary.com/daldqvyai/image/upload/v1665018797/pe8euufx1pkxevzsrijr.jpg',
    secure_url: 'https://res.cloudinary.com/daldqvyai/image/upload/v1665018797/pe8euufx1pkxevzsrijr.jpg',
    folder: '',
    original_filename: 'foto',
    api_key: '541318163912287'
}