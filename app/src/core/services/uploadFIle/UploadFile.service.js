"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const UploadFile = (app) => {
    const uploadPath = `${__dirname}`;
    const fileFilter = (req, file, cb) => {
        // Accept images only
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = "Only image files are allowed!";
            return cb(new Error("Only image files are allowed!"), false);
        }
        cb(null, true);
    };
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "public/uploads/");
        },
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()}${path_1.default.extname(file.originalname)}`);
        },
    });
    const upload = multer_1.default({ storage, fileFilter });
    app.post("/upload", upload.single("file"), (req, res, error) => {
        const file = req.file;
        if (!file) {
            res.send(error);
        }
        else {
            console.log('hello world');
            res.send(`${file.destination}${file.filename}`);
        }
    });
};
module.exports = UploadFile;
