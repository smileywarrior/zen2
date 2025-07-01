import express from 'express';
import { submitWaitlist } from '../controllers/waitlistController.js';

const router = express.Router();
router.post('/', submitWaitlist);
export default router;
