import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        toast.error("Unauthorized! Please login.");
        navigate("/login");
        return;
      }
  
      try {
        const response = await api.get("/auth/getProfiles", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Ensure token is sent
        });
  
        console.log("Response from Backend:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error Fetching Profile:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Failed to fetch user data.");
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false); 
      }
    };
  
    fetchUserData();
  }, [navigate]);
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  if (loading) {
    return <div className="dashboard-container"><h2>Loading...</h2></div>;
  }

  return (
    <div className="dashboard-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="dashboard-box">
        <h2>Welcome, {user?.name}!</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone}</p>
        <p><strong>Subject:</strong> {user?.subject}</p>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
