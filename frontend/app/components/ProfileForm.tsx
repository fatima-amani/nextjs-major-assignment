"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "John Doe",
    email: "johndoe123@gmail.com",
    address: "123 Street USA, Chicago",
    newPassword: "",
    confirmPassword: "123456",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  //   // Send updated data to JSON Server
  //   fetch("http://localhost:3001/users/1", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then(() => alert("Profile updated successfully!"))
  //     .catch((error) => console.error("Error updating profile:", error));
  };


  return (
    <div className="w-[40rem] bg-[#292C2D] p-6 rounded-lg shadow-lg">
      <h2 className="font-[Poppins] text-[1.5625rem] font-medium leading-[2.34375rem] text-white text-left">
        Personal Information
      </h2>

      {/* Profile Picture */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="profile-user-icon.png"
          alt="Profile"
          className="w-[8.81rem] h-[8.81rem]"
        />
        <div>
          <h3 className=" text-white font-[Poppins] text-[25px] font-medium leading-[37.5px] text-left">
            {formData.firstName}
          </h3>
          <p className="text-[#FAC1D9] font-[Poppins] text-[16px] font-light leading-[24px] text-left">
            Manager
            </p>
        </div>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="mb-2 block text-white font-poppins text-[16px] font-medium leading-[24px] text-left">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="pl-6 font-[Poppins] text-[16px] font-light leading-[24px] text-left text-white w-full  h-[65px] bg-[#3D4142] rounded-[0.625rem]"/>
        </div>

        <div>
          <label className="block mb-2 text-white font-poppins text-[16px] font-medium leading-[24px] text-left">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="pl-6 font-[Poppins] text-[16px] font-light leading-[24px] text-left text-white w-full  h-[65px] bg-[#3D4142] rounded-[0.625rem]"/>
        </div>

        <div>
          <label className="block mb-2 text-white font-poppins text-[16px] font-medium leading-[24px] text-left">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="pl-6 font-[Poppins] text-[16px] font-light leading-[24px] text-left text-white w-full  h-[65px] bg-[#3D4142] rounded-[0.625rem]"/>
          
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block  text-white font-poppins text-[16px] font-medium leading-[24px] text-left">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="pl-6 font-[Poppins] text-[16px] font-light leading-[24px] text-left text-white w-full h-[65px] bg-[#3D4142] rounded-[0.625rem]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

          </div>

          <div>
            <label className="block mb-2 text-white font-poppins text-[16px] font-medium leading-[24px] text-left">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="pl-6 font-[Poppins] text-[16px] font-light leading-[24px] text-left text-white w-full h-[65px] bg-[#3D4142] rounded-[0.625rem]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <button type="button" className="font-poppins text-white text-[1rem] font-medium leading-[1.5rem] text-right underline decoration-solid border-white">
            Discard Changes
          </button>
          <button
            type="submit"
            className="bg-[#FAC1D9] w-[13.625rem] h-[4rem] rounded-[0.625rem] font-[Poppins] text-[1rem] font-medium leading-[1.5rem] text-center text-[#333333]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
