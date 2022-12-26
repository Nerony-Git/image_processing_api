import * as App_path from "./app_path";
import { promises as fsPromises } from "fs";

interface file_data {
    filename?: string;
    width?: string;
    height?: string;
}

const get_output_file_path = async (
    fileData: file_data
): Promise<string | undefined> => {
    let path_file: string;
    if (fileData.filename !== undefined) {
        path_file =
            fileData.width && fileData.height
                ? App_path.default.path.resolve(
                      App_path.default.output_file_path,
                      fileData.filename + "-" + fileData.width + "-" + fileData.height + ".jpg"
                  )
                : App_path.default.path.resolve(
                      App_path.default.file_path,
                      fileData.filename + ".jpg"
                  );

        try {
            await fsPromises.access(path_file);
            return path_file;
        } catch {
            return undefined;
        }
    } else {
        return undefined;
    }
};

const get_output_file = async (): Promise<string[]> => {
    try {
        const filename_array: string[] = [];
        const files = await fsPromises.readdir(App_path.default.file_path);
        files.forEach((image_name) => {
            if (image_name.length)
                filename_array.push(image_name.split(".")[0]);
        });
        return filename_array;
    } catch {
        const emptyArr: string[] = [];
        return emptyArr;
    }
};

export default {
    get_output_file,
    get_output_file_path,
};
