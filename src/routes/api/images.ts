import express from "express";
import * as verify from "../../utilities/validation";
import output_file from "../../utilities/store_image_output";
import * as image_path from "../../utilities/image_output_path";


const images = express.Router();

images.get("/", async(request: express.Request, response: express.Response): Promise <void> => {
    const verify_params: string | undefined = await verify.default.check_params(request.query);
    
    if (verify_params) {
        response.send(verify_params);
        return;
    }

    let w_response: string | undefined = "";
    if ((await verify.default.output_exist(request.query)) === false) {
        w_response = await output_file(request.query);
    }

    if (w_response) {
        response.send(w_response);
        return;
    }
    
    const output_path: string | undefined = await image_path.default.get_output_file_path(request.query);
    if (output_path){
        response.sendFile(output_path);
    }else {
        response.send("Output Image can't be displayed!");
    }
});


export default images;
