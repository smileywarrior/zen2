import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import waitlistRoutes from './routes/waitlistRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
dotenv.config();
const app = express();
app.use(cors({
  origin: ['http://localhost:8080'], // You can add deployed domain here later
  credentials: true
}));
app.use(express.json());


connectDB();

app.use('/api/waitlist', waitlistRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('Zenora360 backend is running'));
app.use('/api/admin', adminRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
