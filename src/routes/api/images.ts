import express from "express";
const images = express.Router();

images.get("/", (req, res) => {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;


    console.log("File Name: " + filename + ", Width: " + width + ", Height: " + height);
    res.send("Image Folder");
});

export default images;