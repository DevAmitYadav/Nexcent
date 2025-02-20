import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
  subject: yup.string().min(3).max(100).required("Subject is required"),
  message: yup.string().min(5).max(500).required("Message is required"),
  password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});
