"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    address: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch user data from JSON Server
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send updated data to JSON Server
    fetch("http://localhost:3001/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => alert("Profile updated successfully!"))
      .catch((error) => console.error("Error updating profile:", error));
  };

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="w-[40rem] bg-[#292C2D] p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      {/* Profile Picture */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{formData.firstName}</h3>
          <p className="text-gray-400">Manager</p>
        </div>
        <button className="bg-[#FAC1D9] p-2 rounded-full text-black">✎</button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-400">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-gray-700 p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-700 p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-400">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-gray-700 p-2 rounded-lg"
          />
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full bg-gray-700 p-2 rounded-lg"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-400">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-700 p-2 rounded-lg"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button type="button" className="text-gray-400 hover:underline">
            Discard Changes
          </button>
          <button
            type="submit"
            className="bg-[#FAC1D9] text-black px-4 py-2 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
