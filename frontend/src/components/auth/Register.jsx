import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api"; // Import API service
import "./Register.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Register = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", data);
      toast.success("Registration Successful! Please login.");
      reset();
    } catch (error) {
      if (error.response) {
        // Server response with an error status
        toast.error(error.response.data.message || "Registration failed");
      } else if (error.request) {
        // Request made but no response received
        toast.error("No response from server. Please try again.");
      } else {
        // Something else happened
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("name")} placeholder="Name" />
          <p className="error">{errors.name?.message}</p>

          <input type="email" {...register("email")} placeholder="Email" />
          <p className="error">{errors.email?.message}</p>

          <input type="text" {...register("phone")} placeholder="Phone" />
          <p className="error">{errors.phone?.message}</p>

          <input type="text" {...register("subject")} placeholder="Subject" />
          <p className="error">{errors.subject?.message}</p>

          <textarea {...register("message")} placeholder="Message"></textarea>
          <p className="error">{errors.message?.message}</p>

          <input type="password" {...register("password")} placeholder="Password" />
          <p className="error">{errors.password?.message}</p>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
