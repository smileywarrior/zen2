import Waitlist from '../models/Waitlist.js';

export const submitWaitlist = async (req, res) => {
  try {
    const entry = new Waitlist(req.body);
    await entry.save();
    res.status(201).json({ message: 'Waitlist entry saved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save waitlist entry' });
  }
};
