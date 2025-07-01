import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Waitlist', waitlistSchema);
