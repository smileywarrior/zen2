import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  subject: String,
  sentAt: { type: Date, default: Date.now }
});

export default mongoose.model('ContactMessage', contactSchema);
