import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterComponent from "./components/RegisterComponent";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import Client from "./components/Client";
import Body from "./components/Body";
import Bodyinner from "./components/Bodyinner";
import BodyFooter from "./components/BodyFooter";
import CustomCard from "./components/CustomCard";
import BlogSection from "./components/BlogSection";
import FinalSection from "./components/FinalSection";

// Home Page Component
const Home = () => {
  return (
    <div className="home-container">
      <RegisterComponent />
      <Client />
      <Body />
      <Bodyinner />
      <BodyFooter />
      <CustomCard />
      <BlogSection />
      <FinalSection />
    </div>
  );
};

// Protected Route Function
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
