import express from "express";
const images = express.Router();

images.get("/", (req, res) => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;


    //Validate inputs
    if(filename !== undefined && width !== undefined && height !== undefined) {
        res.send("File Name: " + filename + ", Width: " + width + ", Height: " + height);
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