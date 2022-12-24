import * as path from "path";
//import main = require('require-main-filename');

const file_path = path.resolve(__dirname, "../../images_data/image_input");
const output_file_path = path.resolve(
    __dirname,
    "../../images_data/image_output"
);

export default {
    output_file_path,
    file_path,
    path,
};
