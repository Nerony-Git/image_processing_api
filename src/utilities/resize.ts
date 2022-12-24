import sharp from "sharp";


interface file_resize_data{
    width: number;
    height: number;
    file_path: string;
    output_file_path: string;
}

const image_resize = async (fileResizeData : file_resize_data): Promise<string | undefined> => {
    try {
        await sharp(fileResizeData.file_path)
            .resize(fileResizeData.width, fileResizeData.height,{
                fit: "inside"
            })
            .toFormat("jpg")
            .toFile(fileResizeData.output_file_path);
        return;
    }catch{
        return "Image resize failed!"
    }
};


export default image_resize;
