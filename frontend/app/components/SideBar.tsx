import SideBarIcon from "./SideBarIcon";
import Image from "next/image";

interface SidebarProps {
    setActiveSection: (section: string) => void;
    activeSection: string;
}

export default function Sidebar({ setActiveSection, activeSection }: SidebarProps) {
  let menuOptions = [
    "Dashboard",
    "Menu",
    "Staff",
    "Inventory",
    "Reports",
    "Order/Table",
    "Reservation",
  ];
  return (
    <div className="flex flex-col justify-between items-center h-[98%] w-[15%] bg-[#292c2d] rounded-tr-[1.875rem] rounded-br-[1.875rem] pt-4 pb-5">
      <div className="flex flex-col justify-between items-center">
        <div className="font-poppins font-semibold text-[1.253rem] leading-[1.88rem] text-center text-[#fac1d9] mb-4">
          COSYPOS
        </div>
        {menuOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => setActiveSection(option)}
            className={`w-full flex flex-col items-center cursor-pointer transition-colors duration-300 ${
              activeSection === option ? "bg-pink-500" : ""
            }`}
          >
            <div className="w-[5.479rem] h-0 border-[0.04625rem] border-[#3d4142]"></div>
            <SideBarIcon sectionName={option} />
          </div>
        ))}
      </div>
      <div className="h-[3.3125rem] w-[3.3125rem] flex flex-col items-center justify-center">
        <div className="">
          <img src="/logout.png" alt="" className="h-[1.5rem] w-[1.5rem]" />
        </div>
        <div className="text-white font-poppins font-normal text-base leading-6 text-center">
          Logout
        </div>
      </div>
    </div>
  );
}
