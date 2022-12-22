import express from "express";
const images = express.Router();

images.get("/", (req, res) => {
    res.send("Image Folder");
});


export default images;