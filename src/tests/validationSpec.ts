import * as App_path from "../utilities/app_path";
import output_file from "../utilities/store_image_output";
import { promises as fsPromises } from "fs";

describe("Testing image resizing", (): void => {
    describe("Image resizing", (): void => {
        it("Image resized", async (): Promise<void> => {
            await output_file({
                filename: "icelandwaterfall",
                width: "200",
                height: "500",
            });

            const output_image: string = App_path.default.path.resolve(
                App_path.default.output_file_path,
                "icelandwaterfall_thumb.jpg"
            );
            let msg: string | undefined;
            try {
                await fsPromises.access(output_image);
                msg = "Image resized!";
            } catch {
                msg = "Image not resized!";
            }

            expect(msg).toEqual("Image resized!");
        });
    });
});

afterAll(async (): Promise<void> => {
    const output_image: string = App_path.default.path.resolve(
        App_path.default.output_file_path,
        "icelandwaterfall_thumb.jpg"
    );
    try {
        await fsPromises.access(output_image);
        await fsPromises.unlink(output_image);
    } catch {
        //
    }
});
