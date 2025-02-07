import { User, Key, LogOut } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="w-64 bg-[#292C2D] p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-3 p-3 bg-[#FAC1D9] text-black rounded-lg">
          <User size={18} /> My Profile
        </button>
        <button className="flex items-center gap-3 p-3 text-white hover:bg-gray-700 rounded-lg">
          <Key size={18} /> Manage Access
        </button>
        <button className="flex items-center gap-3 p-3 text-white hover:bg-gray-700 rounded-lg">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}
