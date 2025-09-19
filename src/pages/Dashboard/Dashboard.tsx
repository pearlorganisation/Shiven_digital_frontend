"use client";

import { useEffect } from "react";
import axiosInstance from "@/lib/apiClient";

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("📡 Making test request...");
        const res = await axiosInstance.get("/auth/me"); // replace with your secure API route
        console.log("✅ Response:", res.data);
      } catch (err) {
        console.error("❌ Request failed:", err);
      }
    };

    fetchData();
  }, []);

  return <div className="mt-2">Dashboard</div>;
};

export default Dashboard;
