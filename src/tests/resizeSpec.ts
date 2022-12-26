import * as App_path from "../utilities/app_path";
import image_resize from "../utilities/resize";
import fs, { promises as fsPromises } from "fs";


describe("Image Resize", (): void => {
    it("santamonica.jpg image file was resized successfully", async (): Promise<void> => {
        await image_resize({
            file_path: App_path.default.path.resolve(
                App_path.default.file_path,
                "santamonica.jpg"
            ),
            output_file_path: App_path.default.path.resolve(
                App_path.default.output_file_path,
                "santamonica-300-300.jpg"
            ),
            width: 300,
            height: 300,
        });

        let response_msg: string | undefined;
        const resized_image: string = App_path.default.path.resolve(
            App_path.default.output_file_path,
            "santamonica-300-300.jpg"
        );

        try {
            await fs.existsSync(resized_image);
            response_msg =
                "santamonica.jpg image file was resized successfully";
        } catch {
            response_msg =
                "an error occurred while resizing santamonica.jpg image file";
        }

        expect(response_msg).toEqual(
            "santamonica.jpg image file was resized successfully"
        );
    });
});

afterAll(async (): Promise<void> => {
    const resized_image: string = App_path.default.path.resolve(
        App_path.default.output_file_path,
        "santamonica-300-300.jpg"
    );
    try {
        await fsPromises.access(resized_image);
        await fsPromises.unlink(resized_image);
    } catch {
        //
    }
});
