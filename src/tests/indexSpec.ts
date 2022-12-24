import supertest from "supertest";
import app from "../index";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe("Test endpoint responses", (): void => {
    describe("Testing endpoint response: valid arguments", (): void => {
        it("api endpoint ", async (): Promise<void> => {
            const response: supertest.Response = await request.get("/");
            expect(response.status).toBe(200);
        });

        it("existing images", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/api/images?filename=encenadaport");
            expect(response.status).toBe(200);
        });

        it("specifying valid parameters", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/api/images?filename=encenadaport&width=300&height=500");
            expect(response.status).toBe(200);
        });
    });

    describe("Testing endpoint response: invalid arguments", (): void => {
        it("invalid endpoint: returns 404", async (): Promise<void> =>{
            const response: supertest.Response = await request.get("/sport");
            expect(response.status).toBe(404);
        });

        it("gets /images", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images");
            expect(response.status).toBe(404);
        });

        it("not specifying all required parameters", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images/encenadaport");
            expect(response.status).toBe(404);
        });

        it("non-existing image", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing");
            expect(response.status).toBe(404);
        });

        it("specifying filename and width without height", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing&&width=300");
            expect(response.status).toBe(404);
        });

        it("specifying filename and height without width", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing&&height=500");
            expect(response.status).toBe(404);
        });

        it("specifying a negative width", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing&&width=-300&&height=500");
            expect(response.status).toBe(404);
        });

        it("specifying an invalid width", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing&&width=west&&height=500");
            expect(response.status).toBe(404);
        });

        it("specifying a negative height", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing&&width=300&&height=-500");
            expect(response.status).toBe(404);
        });

        it("specifying an invalid height", async(): Promise<void> => {
            const response: supertest.Response = await request.get("/images?filename=non_existing&&width=300&&height=east");
            expect(response.status).toBe(404);
        });
    });
});