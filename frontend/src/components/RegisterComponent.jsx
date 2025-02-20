import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/ui/Loader";
import "../components/RegisterComponent.css";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegisterClick = () => {
    toast.success("Redirecting to Register Page..."); // Show success toast
    setLoading(true); // Show loader

    setTimeout(() => {
      setLoading(false);
      navigate("/register"); 
    }, 2000);
  };

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={2000} />
      {loading && <Loader />} {/* Show loader if loading */}
      
      <div className="content">
        <div className="text-section">
          <h1 className="title">Lessons and insights</h1>
          <h2 className="subtitle">from 8 years</h2>
          <p className="description">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="register-button" onClick={handleRegisterClick} disabled={loading}>
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
        <div className="image-section">
          <img
            src="https://storage.googleapis.com/a1aa/image/DQuOQqV2c2KptTB1T6N9oh0qGkklTJcrE89zgjp6dTg.jpg"
            alt="Illustration of a person with a laptop and a monitor displaying code and diagrams"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
