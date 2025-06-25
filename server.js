const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect('mongodb://localhost:27017/time-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema
const TrackSchema = new mongoose.Schema({
  url: String,
  timeSpent: Number,
  date: { type: Date, default: Date.now }
});
const Track = mongoose.model('Track', TrackSchema);

// API
app.post('/api/track', async (req, res) => {
  const { url, timeSpent } = req.body;
  const track = new Track({ url, timeSpent });
  await track.save();
  res.json({ message: 'Saved' });
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
