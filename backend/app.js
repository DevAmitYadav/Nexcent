import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// CORS Configuration (allow only specific domains for security)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL || "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
  
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
});

// Middleware
app.use(express.json());
app.use(morgan('dev')); // Logs requests in the console

// Routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Authentication API</h1>');
});

// Database Connection with Error Handling
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); // Exit the application if DB connection fails
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
