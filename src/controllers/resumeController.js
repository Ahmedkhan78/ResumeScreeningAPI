const { extractTextFromResume } = require("../services/resumeParser");
const { matchKeywords } = require("../services/keywordMatcher");
const { getGeminiResumeScore } = require("../services/geminiScoring");

exports.uploadResume = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  if (!req.body.jobDescription)
    return res.status(400).json({ error: "Job description is required" });

  const extractedText = await extractTextFromResume(req.file.path);
  const keywordMatch = matchKeywords(extractedText, req.body.jobDescription);
  const aiScoring = await getGeminiResumeScore(
    extractedText,
    req.body.jobDescription
  );

  res.status(200).json({
    extractedText,
    matchScore: keywordMatch.score,
    matchedSkills: keywordMatch.matchedSkills,
    aiScore: aiScoring.aiScore,
    missingSkills: aiScoring.missingSkills,
  });
};
