import { promises as fsPromises } from "fs";
import * as App_path from "./app_path";
import * as output_file from "./image_output_path";

interface file {
    filename?: string;
    width?: string;
    height?: string;
}

const check_output_folder = async (): Promise<void> => {
    try {
        await fsPromises.access(App_path.default.output_file_path);
    } catch {
        fsPromises.mkdir(App_path.default.output_file_path);
    }
};

const output_exist = async (fileData: file): Promise<boolean> => {
    let filePath: string;
    if (
        fileData.filename === undefined ||
        fileData.width === undefined ||
        fileData.height === undefined
    ) {
        return false;
    } else {
        filePath = App_path.default.path.resolve(
            App_path.default.output_file_path,
            fileData.filename + "-" + fileData.width + "-" + fileData.height + ".jpg"
        );
    }
    try {
        await fsPromises.access(filePath);
        return true;
    } catch {
        return false;
    }
};

const check_input_folder = async (): Promise<void> => {
    try {
        await fsPromises.access(App_path.default.file_path);
    } catch {
        fsPromises.mkdir(App_path.default.file_path);
    }
};

const input_exist = async (fileName = ""): Promise<boolean> => {
    let is_exist: boolean;
    if (fileName === undefined) {
        is_exist = false;
        return false;
    } else {
        is_exist = (await output_file.default.get_output_file()).includes(
            fileName
        );
        if (is_exist) {
            return true;
        } else {
            return false;
        }
    }
};

const check_params = async (params: file): Promise<string | undefined> => {
    let file_name: string | undefined;
    let width: number;
    let height: number;

    if ((await input_exist(params.filename)) === false) {
        file_name = (await output_file.default.get_output_file()).join(", ");
        if (file_name.length > 0) {
            return "Please input filename!";
        } else {
            return undefined;
        }
    } else if (params.width !== undefined && params.height !== undefined) {
        width = parseInt(params.width || "");
        height = parseInt(params.height || "");

        if (
            width < 1 ||
            height < 1 ||
            Number.isNaN(width) ||
            Number.isNaN(height)
        ) {
            return "Please supply a positive number for both width and height";
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
};

export default {
    check_output_folder,
    output_exist,
    check_input_folder,
    input_exist,
    check_params,
};
