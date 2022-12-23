import { path } from "app-root-path";
import express from "express";
import fs from "fs";
import sharp from "sharp";
//import { promises as fsPromises } from "fs";

const images = express.Router();

images.get("/", (req, res) => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const file_path = "./images_data/image_input/" + filename + ".jpg" as string;
    const output_filename = "/images_data/image_output/" + filename + "_thumb.jpg" as string;
    const output_file_path = "./images_data/image_output/" + filename + "_thumb.jpg" as string;
    


    //Validate inputs
    if(filename !== undefined && width !== undefined && height !== undefined) {
        //res.send("File Name: " + filename + ", Width: " + width + ", Height: " + height);
        // Check if file exist in image_input folder of the images_data folder
        if(fs.existsSync(file_path)) {
            console.log(filename + " exists in images data folder");

            // Check if file exist in image_output folder of the images_data folder
            if(fs.existsSync(output_file_path)){
                //return already resized image in image_output folder
                console.log("Yes");
            }else{
                //resize image 
                sharp(file_path)
                    .resize(parseInt(width), parseInt(height),{
                        fit: "inside"
                    })
                    .toFile(output_file_path)
                //console.log("");
                res.sendFile(path + output_filename);
            }
        }else {
            console.log(filename + " does not exists in images data folder");
        }
    }
    else if(filename === undefined && width !== undefined && height !== undefined) {
        res.send("Please input file name!")
    }else if(filename !== undefined && width === undefined && height !== undefined) {
        res.send("Please input width!")
    }else if(filename !== undefined && width !== undefined && height === undefined) {
        res.send("Please input height!")
    }
    else if(filename === undefined && width === undefined && height !== undefined) {
        res.send("Please input file name and width!")
    }else if(filename === undefined && width !== undefined && height === undefined) {
        res.send("Please input file name and height!")
    }else if(filename !== undefined && width === undefined && height === undefined) {
        res.send("Please input width and height!")
    }else if(filename === undefined && width === undefined && height === undefined) {
        res.send("Please input values for filename, width and height")
    }


    console.log("File Name: " + filename + ", Width: " + width + ", Height: " + height);
    //res.send("Image Folder");
});

export default images;