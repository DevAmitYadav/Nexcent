import { body, validationResult } from 'express-validator';

export const validateRegistration = [
    body('name').isLength({ min: 3, max: 50 }).withMessage('Name must be 3-50 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('phone').matches(/^[0-9]{10}$/).withMessage('Phone must be a 10-digit number'),
    body('subject').isLength({ max: 100 }).withMessage('Subject must be under 100 characters'),
    body('message').isLength({ max: 500 }).withMessage('Message must be under 500 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];

export const validateLogin = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    }
];
