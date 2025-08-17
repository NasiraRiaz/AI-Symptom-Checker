const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { HfInference } = require('@huggingface/inference');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully."))
    .catch(err => console.error("MongoDB connection error:", err));

const FirstAidSchema = new mongoose.Schema({
    condition: { type: String, required: true, unique: true, lowercase: true },
    title: { type: String, required: true },
    instructions: { type: [String], required: true }
});
const FirstAid = mongoose.model('FirstAid', FirstAidSchema);

app.post('/api/check-symptoms', async (req, res) => {
    const { symptoms } = req.body;
    if (!symptoms) {
        return res.status(400).json({ error: 'Symptoms are required.' });
    }

    try {
        const aiResponse = await hf.chatCompletion({
            model: 'HuggingFaceH4/zephyr-7b-beta',
            messages: [{
                role: "user",
                content: `Analyze these symptoms: "${symptoms}". What is the single most likely medical condition? Respond with a brief, one-sentence description. Your entire response MUST start with the condition name, followed by a colon, and then the description. Do not add any other text.`
            }],
            max_tokens: 80,
            temperature: 0.1,
            return_full_text: false,
        });

        const rawText = aiResponse.choices[0].message.content;
        const firstLine = rawText.trim().split('\n')[0];
        let condition = "Analysis Unsuccessful";
        let description = "Could not determine a specific condition from the provided symptoms. Please try being more specific.";
        const firstColonIndex = firstLine.indexOf(':');

        if (firstColonIndex > -1) {
            condition = firstLine.substring(0, firstColonIndex).trim();
            description = firstLine.substring(firstColonIndex + 1).trim();
        } else if (firstLine) {
            condition = firstLine;
        }

        res.json({ conditions: [{ condition, description }] });
    } catch (error) {
        console.error('Error during Hugging Face API call:', error);
        res.status(500).json({ error: 'Failed to get a response from the AI service.' });
    }
});

app.get('/api/first-aid', async (req, res) => {
    const { condition } = req.query;
    if (!condition) {
        return res.status(400).json({ error: 'Condition is required.' });
    }
    try {
        const key = condition.toLowerCase();
        let aid = await FirstAid.findOne({ condition: key });
        if (!aid) {
            aid = await FirstAid.findOne({ condition: 'default' });
        }
        res.json(aid);
    } catch (error) {
        res.status(500).json({ error: 'Database error.' });
    }
});

app.post('/api/synthesize-speech', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required.' });
    }

    try {
        const translationUrl = `https://translate.googleapis.com/translate_a/single`;
        const translationResponse = await axios.get(translationUrl, {
            params: { client: 'gtx', sl: 'en', tl: 'ur', dt: 't', q: text }
        });

        const urduText = translationResponse.data[0].map(segment => segment[0]).join('');

        const ttsUrl = `https://translate.google.com/translate_tts`;
        const ttsResponse = await axios({
            method: 'get',
            url: ttsUrl,
            params: { ie: 'UTF-8', q: urduText, tl: 'ur', client: 'tw-ob' },
            responseType: 'arraybuffer'
        });

        const audioContent = Buffer.from(ttsResponse.data, 'binary').toString('base64');
        res.json({ audioContent });
    } catch (error) {
        console.error('ERROR synthesizing speech:', error.message);
        res.status(500).json({ error: 'Failed to synthesize speech.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});