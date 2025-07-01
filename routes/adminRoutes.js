import express from 'express';
import { getAllUsers, getAllContacts, getWaitlist } from '../controllers/adminControllers.js';
import { verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/users', verifyAdmin, getAllUsers);
router.get('/contacts', verifyAdmin, getAllContacts);
router.get('/waitlist', verifyAdmin, getWaitlist);

export default router;
