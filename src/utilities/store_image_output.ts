import * as App_path from "./app_path";
import image_resize from "./resize";



interface file_data{
    filename?: string;
    width?: string;
    height?: string;
}

const output_file = async(fileData: file_data): Promise<string | undefined> => {
    let file_Path: string;
    let output_file_Path: string;
    let file_width: number;
    let file_height: number;

    if (fileData.filename !== undefined || fileData.width !== undefined || fileData.height !== undefined) {
        file_Path = App_path.default.path.resolve(App_path.default.file_path, fileData.filename + ".jpg");
        output_file_Path = App_path.default.path.resolve(App_path.default.output_file_path, fileData.filename + "_thumb.jpg");
        file_width = parseInt(fileData.width || "");
        file_height = parseInt(fileData.height || "");

        if (!isNaN(file_width) && !isNaN(file_height)){
            return await image_resize({
                file_path: file_Path, 
                output_file_path: output_file_Path,
                width: file_width, 
                height: file_height
            });
        }else{
            return undefined;
        }
    }else{
        return undefined;
    }
};


export default output_file;
