import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api"; // Import API service
import { useNavigate } from "react-router-dom"; // For redirection
import "./Login.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data.token;
  
      if (token) {
        localStorage.setItem("token", token); // ✅ Ensure token is saved
        toast.success("Login Successful! Redirecting...");
        
        setTimeout(() => {
          navigate("/dashboard"); // ✅ Redirect after storing token
        }, 1000);
      } else {
        toast.error("Login failed. No token received.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="login-container">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register("email")} placeholder="Email" />
          <p className="error">{errors.email?.message}</p>

          <input type="password" {...register("password")} placeholder="Password" />
          <p className="error">{errors.password?.message}</p>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
