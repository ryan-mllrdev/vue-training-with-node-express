import * as core from "express-serve-static-core";
import multer from "multer";
import path from "path";
import { User } from "../../../models/dbmodels/User";
import UserRepository from "../../repositories/user/UserRepository";

const UploadFile = (app: core.Express) => {
  const uploadPath = `${__dirname}`;

  const fileFilter = (req: any, file: any, cb: any) => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = "Only image files are allowed!";
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  };

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });

  const upload = multer({ storage, fileFilter });
  app.post("/upload", upload.single("file"), (req: any, res, error) => {
    const file = req.file;
    if (!file) {
      res.send(error);
    } else {
      console.log('hello world');
      res.send(`${file.destination}${file.filename}`);
    }
  });
};

export = UploadFile;
