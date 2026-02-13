require('dotenv').config();
const express = require('express');
const cors = require('cors');
const simpleGit = require('simple-git');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Simple health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Git Storyteller backend listening on port ${PORT}`);
});
