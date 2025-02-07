"use client";

import { useEffect, useState } from "react";
import StaffManagement from "./StaffManagement";
import Attendance from "./Attendance";

interface StaffMember {
  id: number;
  name: string;
  image: string;
  role: string;
  email: string;
  phone: string;
  age: number;
  salary: number;
  timing: string;
}

export default function Staff() {
  const [staffData, setStaffData] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"management" | "attendance">("management");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch("http://localhost:3001/staff");
        const data = await response.json();

        if (data && Array.isArray(data)) {
          setStaffData(data);
        }
      } catch (error) {
        console.error("Error fetching staff data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffData();
  }, []);

  // Sorting function
  const handleSort = (criteria: string) => {
    let sortedData = [...staffData];

    switch (criteria) {
      case "id":
        sortedData.sort((a, b) => a.id - b.id);
        break;
      case "age":
        sortedData.sort((a, b) => a.age - b.age);
        break;
      case "salary":
        sortedData.sort((a, b) => b.salary - a.salary);
        break;
      default:
        break;
    }

    setSortBy(criteria);
    setStaffData(sortedData);
  };

  return (
    <div className="p-6 bg-[#1E1E1E] text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-poppins text-[1.5625rem] font-medium leading-[2.34375rem] text-left w-[8.9375rem] h-[3.25rem]">
          Staff ( {staffData ? staffData.length : ""} )
        </h2>
        <div className="flex gap-4">
          <button className="bg-[#FAC1D9] px-4 py-2 rounded text-black font-medium br-[0.4675rem] w-[7.4556rem] h-[3.26125rem]">
            Add Staff
          </button>
          <select
            className="bg-[#303030] text-white px-4 py-2 br-[0.4675rem] rounded"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="id">ID</option>
            <option value="age">Age</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-start mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === "management" ? "bg-[#FAC1D9] text-black" : "bg-[#303030] text-white"}`}
          onClick={() => setActiveTab("management")}
        >
          Staff Management
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "attendance" ? "bg-[#FAC1D9] text-black" : "bg-[#303030] text-white"}`}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance
        </button>
      </div>

      {loading ? (
        <p className="text-center text-white mt-4">Loading...</p>
      ) : activeTab === "management" ? (
        <StaffManagement staffDetail={staffData} />
      ) : (
        <Attendance staffDetail={staffData}/>
      )}
    </div>
  );
}
