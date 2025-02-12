require("dotenv").config();
const express = require("express");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(express.json()); // JSON parsing middleware
app.use("/api/resume", resumeRoutes); // Resume routes mount kar raha hai

const PORT = process.env.PORT;

// ✅ Fix: Server sirf tabhi chale jab direct run ho (test ke time nahi)
if (require.main === module) {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}

module.exports = app; // Jest tests ke liye required
