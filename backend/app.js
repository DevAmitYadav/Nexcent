import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// ✅ Allow All CORS (Temporarily for Debugging)
app.use(cors({
    origin: "*",
    credentials: true,
}));

// ✅ Handle Preflight Requests
app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.sendStatus(200);
});

// ✅ Middleware
app.use(express.json());  // Parse JSON data
app.use(morgan('dev'));   // Log requests

// ✅ API Routes
app.use('/api/auth', authRoutes);  // Prefix all auth routes with `/api/auth`

// ✅ Default Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Authentication API</h1>');
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
