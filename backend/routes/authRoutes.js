import express from 'express';
import { registerUser, loginUser,getUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateRegistration, validateLogin } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.post('/register', validateRegistration, registerUser);
router.post('/login', validateLogin, loginUser);
router.get("/getProfiles", protect, getUserProfile);
router.get('/protected', protect, (req, res) => {
    res.json({ success: true, message: "You accessed a protected route!", user: req.user });
});

export default router;
