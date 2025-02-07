const request = require("supertest");
const app = require("../src/app");
const path = require("path");

describe("Resume Upload API", () => {
  it("should upload a PDF resume successfully", async () => {
    const res = await request(app)
      .post("/api/resume/upload")
      .set("Content-Type", "multipart/form-data")
      .attach("resume", path.join(__dirname, "sample-resume.pdf"))
      .field("jobDescription", "Looking for a Node.js Developer");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("extractedText");
  });

  it("should return an error for missing file", async () => {
    const res = await request(app).post("/api/resume/upload");

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "No file uploaded" });
  });
});
