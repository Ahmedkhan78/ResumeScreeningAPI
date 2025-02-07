const { extractTextFromResume } = require("../src/services/resumeParser");
const path = require("path");

describe("Resume Parser", () => {
  it("should extract text from PDF", async () => {
    const text = await extractTextFromResume(
      path.join(__dirname, "sample-resume.pdf")
    );
    expect(text.length).toBeGreaterThan(10);
  });

  it("should return error for invalid file", async () => {
    // ✅ Console errors disable kar rahe hain taaki Jest extra log na dikhaye
    const originalConsoleError = console.error;
    console.error = jest.fn();

    await expect(extractTextFromResume("invalid-file.xyz")).rejects.toThrow();

    // ✅ Test ke baad console.error wapas enable kar diya
    console.error = originalConsoleError;
  });
});
