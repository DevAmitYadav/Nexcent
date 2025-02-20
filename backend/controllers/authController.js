import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, subject, message, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Save user (password hashing is handled in the model)
    const newUser = new User({ name, email, phone, subject, message, password });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and include password field
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "User not found. Please register." });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Fetch User Profile (Authenticated Route)
 const getUserProfile = async (req, res) => {
    try {
      console.log("Inside getUserProfile API - User ID from Token:", req.user._id); // ✅ Check User ID
  
      const user = await User.findById(req.user._id).select("-password");
      console.log("User Found in Database:", user); // ✅ Check if user is found
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      console.error("Error in getUserProfile:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  

export { registerUser, loginUser, getUserProfile };
