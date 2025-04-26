import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/test-prompt', async (req, res) => {
  const { prompt } = req.body;
  // Here you would call your LLM or mock a response
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
  // Mock response for now
  res.json({ reply: `Echo: ${prompt}` });
});


// Register a new user
router.post('/register', async (req, res) => {
  const { username, room, socketId } = req.body;

  if (!username || !room || !socketId) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Check if the user already exists in the room
    const existingUser = await User.findOne({ username, room });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken in this room.' });
    }

    const user = new User({ username, room, socketId });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.', user });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Get all users in a room
router.get('/room/:room', async (req, res) => {
  const { room } = req.params;

  try {
    const users = await User.find({ room });
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});

// Remove a user by socketId
router.delete('/remove/:socketId', async (req, res) => {
  const { socketId } = req.params;

  try {
    const user = await User.findOneAndDelete({ socketId });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ message: 'User removed successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
});

export default router;
