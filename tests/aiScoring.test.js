require("dotenv").config({ path: "./.env" }); // ✅ Jest Me .env Load Kar Raha Hai

const { getGeminiResumeScore } = require("../src/services/geminiScoring");

describe("AI Resume Scoring (Gemini AI)", () => {
  it("should return a valid AI score and missing skills", async () => {
    console.log("🔹 GEMINI_API_KEY:", process.env.GEMINI_API_KEY); // ✅ Debugging Output

    const resumeText =
      "Experienced software engineer skilled in JavaScript, Node.js, React.js.";
    const jobDescription =
      "Looking for a full-stack developer with expertise in JavaScript, Node.js, AWS, and Docker.";

    const result = await getGeminiResumeScore(resumeText, jobDescription);

    console.log("🔹 AI Test Output:", result); // ✅ Debugging Output

    expect(result).toHaveProperty("aiScore");
    expect(result).toHaveProperty("matchedSkills");
    expect(result).toHaveProperty("missingSkills");

    expect(result.aiScore).toBeGreaterThanOrEqual(0);
    expect(result.aiScore).toBeLessThanOrEqual(100);
    expect(Array.isArray(result.matchedSkills)).toBe(true);
    expect(Array.isArray(result.missingSkills)).toBe(true);
  });
});
