import express from "express";
import routes from "./routes/index";
import logger from "./utilities/logger";
import * as verify from "./utilities/validation";


const app = express();
const port = 3000;

app.use(logger, routes);

app.listen(port, async(): Promise<void> => {
    await verify.default.check_output_folder();
    console.log("server started at localhost: ", port);
});


export default app;