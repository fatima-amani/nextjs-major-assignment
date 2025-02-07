"use client";

import ProfileSidebar from "./ProfileSidebar";
import ProfileForm from "./ProfileForm";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white p-6">
      {/* Sidebar */}
      <ProfileSidebar />

      {/* Profile Form */}
      <div className="flex-1 flex justify-center">
        <ProfileForm />
      </div>
    </div>
  );
}
