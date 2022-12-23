"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
//import { promises as fsPromises } from "fs";
var images = express_1.default.Router();
images.get("/", function (req, res) {
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    var file_path = "./images_data/image_input/" + filename + ".jpg";
    //const output_filename = filename + "_thumb.jpg" as string;
    var output_file_path = "./images_data/image_output/" + filename + "_thumb.jpg";
    //Validate inputs
    if (filename !== undefined && width !== undefined && height !== undefined) {
        res.send("File Name: " + filename + ", Width: " + width + ", Height: " + height);
        // Check if file exist in image_input folder of the images_data folder
        if (fs_1.default.existsSync(file_path)) {
            console.log(filename + " exists in images data folder");
            // Check if file exist in image_output folder of the images_data folder
            if (fs_1.default.existsSync(output_file_path)) {
                //return already resized image in image_output folder
                console.log("Yes");
            }
            else {
                //resize image 
                (0, sharp_1.default)(file_path)
                    .resize(parseInt(width), parseInt(height), {
                    fit: "inside"
                })
                    .toFile(output_file_path);
                console.log("");
            }
        }
        else {
            console.log(filename + " does not exists in images data folder");
        }
    }
    else if (filename === undefined && width !== undefined && height !== undefined) {
        res.send("Please input file name!");
    }
    else if (filename !== undefined && width === undefined && height !== undefined) {
        res.send("Please input width!");
    }
    else if (filename !== undefined && width !== undefined && height === undefined) {
        res.send("Please input height!");
    }
    else if (filename === undefined && width === undefined && height !== undefined) {
        res.send("Please input file name and width!");
    }
    else if (filename === undefined && width !== undefined && height === undefined) {
        res.send("Please input file name and height!");
    }
    else if (filename !== undefined && width === undefined && height === undefined) {
        res.send("Please input width and height!");
    }
    else if (filename === undefined && width === undefined && height === undefined) {
        res.send("Please input values for filename, width and height");
    }
    console.log("File Name: " + filename + ", Width: " + width + ", Height: " + height);
    //res.send("Image Folder");
});
exports.default = images;
