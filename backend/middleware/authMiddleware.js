import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

export const protect = async (req, res, next) => {
  let token;

  console.log("Authorization Header:", req.headers.authorization); // ✅ Check if token is received

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Extracted Token:", token); // ✅ Check if token is extracted

      if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Token Data:", decoded); // ✅ Check decoded token data

      req.user = await User.findById(decoded.userId).select("-password");
      console.log("User Retrieved from DB:", req.user); // ✅ Check if user exists in DB

      if (!req.user) {
        return res.status(404).json({ success: false, message: "User not found in database" });
      }

      next();
    } catch (error) {
      console.error("JWT Verification Error:", error);
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
  } else {
    return res.status(401).json({ success: false, message: "No token, authorization denied" });
  }
};
