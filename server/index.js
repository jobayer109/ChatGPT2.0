const express = require("express");
const bodyParser = require("body-parser");
const openai = require("openai");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const port = 5000;

// Set OpenAI API key
openai.apiKey = process.env.API_KEY;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Route for handling text generation requests
app.post("/generate-text", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
