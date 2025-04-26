// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Your Groq API Key (keep it secret!)
const GROQ_API_KEY = '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';

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const groqResponse = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'mixtral-8x7b-32768', // or 'llama2-70b-4096', etc
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    const botReply = groqResponse.data.choices[0].message.content;
    res.json({ reply: botReply });

  } catch (error) {
    console.error('Error calling Groq API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

