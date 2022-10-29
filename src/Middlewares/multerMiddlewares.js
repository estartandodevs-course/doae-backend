import multer from "multer";

export function uploadFile(){
    const storage = multer.diskStorage({
        destination:"src/Uploads/",
        filename: function (req, file, cb) {
            cb(null, `unidade${Date.now()}_data${file.originalname}` )
        }
    })
    
    const upload = multer({storage: storage});

    return upload;
}