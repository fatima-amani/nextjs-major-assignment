
export default function ProfileSidebar() {
  return (
    <div className="w-[19.9375rem] h-[14.75rem] bg-[#292C2D] p-4 rounded-lg flex flex-col justify-around">
      <div className="flex flex-col gap-2">
        <button className="pl-10 flex items-center gap-3 p-3 bg-[#FAC1D9] text-black rounded-lg">
          <img src="profile-profile-icon.png" alt="" />
            My Profile
        </button>
        <button className="pl-10 flex items-center gap-3 p-3 text-white hover:bg-gray-700 rounded-lg">
          <img src="profile-access-icon.png" alt="" />
          Manage Access
        </button>
        <button className="pl-10 flex items-center gap-3 p-3 text-white hover:bg-gray-700 rounded-lg">
          <img src="profile-logout-icon.png" alt="" />
          Logout
        </button>
      </div>
    </div>
  );
}
