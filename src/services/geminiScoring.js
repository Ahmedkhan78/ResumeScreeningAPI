const axios = require("axios");
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

exports.getGeminiResumeScore = async (resumeText, jobDescription) => {
  try {
    const prompt = `
      You are an AI that evaluates resumes. Your task is to:
      1️⃣ Extract key skills, technologies, and experience from the resume.
      2️⃣ Compare them with the job description.
      3️⃣ Identify **missing skills** (skills required in job but not found in resume).
      4️⃣ Return an **AI-based match score** (0-100%).

      Resume: """${resumeText}"""
      Job Description: """${jobDescription}"""

      **Response Format (Strict JSON, no markdown, no extra text, no explanation):**
      {
        "aiScore": number,
        "matchedSkills": ["skill1", "skill2"],
        "missingSkills": ["skillA", "skillB"]
      }
    `;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }
    );

    // ✅ Extract AI Response
    let aiText = response.data.candidates[0].content.parts[0].text;

    // ✅ Fix: Remove "JSON" keyword & markdown characters
    aiText = aiText.replace(/^JSON\s*/i, ""); // Remove "JSON" word if it appears at the start
    aiText = aiText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim(); // Remove markdown

    // ✅ Fix: Ensure response is valid JSON
    const aiResult = JSON.parse(aiText);

    return aiResult;
  } catch (error) {
    console.error(
      "❌ Gemini AI Scoring Error:",
      error.response?.data || error.message
    );
    throw new Error("Failed to generate AI resume score with Gemini AI");
  }
};
