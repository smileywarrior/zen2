import User from '../models/User.js';
import Contact from '../models/ContactMessage.js';
import Waitlist from '../models/Waitlist.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err.message });
  }
};

export const getWaitlist = async (req, res) => {
  try {
    const waitlist = await Waitlist.find();
    res.json(waitlist);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching waitlist', error: err.message });
  }
};
