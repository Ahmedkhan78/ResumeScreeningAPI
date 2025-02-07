const fs = require("fs");
const pdfParse = require("pdf-parse");

exports.extractTextFromResume = async (filePath) => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const text = await pdfParse(fileBuffer);

    // ✅ Fix: Extra newlines remove karne ke liye text cleanup
    const cleanedText = text.text.replace(/\n+/g, " ").trim();

    return cleanedText;
  } catch (error) {
    console.error("❌ Error parsing resume:", error);
    throw new Error("Failed to extract text from resume");
  }
};
