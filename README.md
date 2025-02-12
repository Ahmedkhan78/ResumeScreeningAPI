

---

## 📌 **🔥 Resume Screening API**

```md
# 🚀 AI-Powered Resume Screening API

![Resume Screening API](https://img.shields.io/badge/AI--Powered-Resume%20Screening-blue.svg)
![Express.js](https://img.shields.io/badge/Backend-Express.js-green.svg)
![Google Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini-red.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)

## 📌 Overview

An **AI-powered Resume Screening API** built with **Node.js, Express, and Google Gemini AI**.  
It helps recruiters analyze resumes, generate professional summaries, score candidates, and suggest missing skills.

---

## 🔥 Features

✅ **Resume Parsing** – Extracts text from PDF resumes  
✅ **Keyword Matching** – Matches skills with job description  
✅ **AI Resume Scoring** – Uses Google Gemini AI to evaluate resumes  
✅ **AI Resume Summarization** – Generates a professional summary  
✅ **Automated Testing** – Jest & Supertest for API testing

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **AI Integration:** Google Gemini AI
- **Storage:** Multer (for file uploads)
- **Testing:** Jest, Supertest
- **Deployment:** Render / Railway / Vercel

---

## 📂 Project Structure


📂 resume-screening-api
├── 📂 uploads/ # Stores uploaded resumes (ignored in Git)
├── 📂 src/
│ ├── 📂 controllers/  
│ │ ├── resumeController.js # Handles resume upload, AI scoring, and summarization
│ ├── 📂 services/
│ │ ├── resumeParser.js # Extracts text from PDF resumes
│ │ ├── keywordMatcher.js # Matches resume skills with job description
│ │ ├── geminiScoring.js # Uses Gemini AI to score resumes
│ │ ├── resumeSummarizer.js # AI-powered resume summarization
│ ├── 📂 routes/
│ │ ├── resumeRoutes.js # API routes for resume processing
│ ├── 📂 config/
│ │ ├── config.js # Stores API keys and configurations
│ ├── app.js # Main Express app file
├── 📂 tests/
│ ├── resumeController.test.js # Jest & Supertest API tests
│ ├── resumeUpload.test.js # Resume upload test cases
│ ├── aiScoring.test.js # AI scoring test cases
│ ├── resumeParser.test.js # Resume parsing test cases
├── .gitignore
├── .env.example # Example environment variables file
├── package.json
├── README.md # Project documentation




## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
bash
git clone https://github.com/yourusername/resume-screening-api.git
cd resume-screening-api
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Environment Variables (`.env`)

Create a `.env` file in the root directory and add:

```env
PORT=3000
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4️⃣ Run the API Locally

```bash
npm start      # Production Mode
npm run dev    # Development Mode (Nodemon)
```

---

## 🔥 API Endpoints

### ➤ **Upload Resume & Get AI Analysis**

**`POST /api/resume/upload`**  
📌 **Headers:**

```json
Content-Type: multipart/form-data
```

📌 **Request Body (Form Data):**

- `resume` → PDF Resume File
- `jobDescription` → Job description text

📌 **Response:**

```json
{
  "extractedText": "Resume text...",
  "matchScore": 85,
  "matchedSkills": ["JavaScript", "Node.js"],
  "aiScore": 80,
  "missingSkills": ["AWS", "Docker"],
  "summary": {
    "Professional Title": "Software Engineer with 5+ years experience",
    "Top Skills": ["JavaScript", "Node.js"],
    "Key Achievements": ["Developed scalable APIs"],
    "Education": "B.Tech in Computer Science"
  }
}
```

---

## 🔥 Running Tests (Jest)

```bash
npm test
```

✅ **Jest + Supertest ensures API is working properly.**

---

## 🚀 Deployment

Tera API **Render / Railway / Vercel** pe deploy ho sakta hai.

**Example (Render Deployment Steps)**  
1️⃣ **GitHub pe repo push karo**  
2️⃣ **[Render](https://render.com/) pe jao → "New Web Service" select karo**  
3️⃣ **GitHub se repo connect karo**  
4️⃣ **Build & Start Commands:**

```bash
npm install
node src/app.js
```

5️⃣ **Environment Variables Render Dashboard me set karo**  
6️⃣ **Deploy & API Live Ho Jayegi!** 🚀

---

## 🤝 Contributing

Agar tu **is project ko contribute** karna chahta hai toh:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Make changes and commit (`git commit -m "Added feature XYZ"`)
4. Push changes (`git push origin feature-xyz`)
5. Create a Pull Request

---

## 📞 Contact

💡 **For questions or collaborations, contact:**  
📧 Email: `a499hasan04@gmail.com`  
🌎 GitHub: https://github.com/Ahmedkhan78 

---

## 🎯 Future Enhancements

🚀 **Coming Soon:**  
✅ **AI-based Job Recommendations**  
✅ **AI Cover Letter Generator**  
✅ **Resume Ranking System**  
✅ **Fake Experience Detection**

---

## 🏆 Credits

Built with ❤️ **ZEDn.g** 🚀

```

```
