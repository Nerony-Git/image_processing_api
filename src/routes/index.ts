import express from "express";
import images from "./api/images";

const routes = express.Router();

routes.get("/", (request: express.Request, response: express.Response): void => {
    response.send("Hello, Udacity Main Test!!");
});

routes.use("/api/images", images);

export default routes;