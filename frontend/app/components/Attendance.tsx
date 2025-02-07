import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

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

interface StaffManagementProps {
  staffDetail: StaffMember[];
}

export default function Attendance({ staffDetail }: StaffManagementProps) {
  const [statusMap, setStatusMap] = useState<{ [key: number]: string }>({});
  const [openStatusId, setOpenStatusId] = useState<number | null>(null);

  const handleStatusClick = (id: number) => {
    setOpenStatusId(openStatusId === id ? null : id);
  };

  const handleSelectStatus = (id: number, status: string) => {
    setStatusMap((prev) => ({ ...prev, [id]: status }));
    setOpenStatusId(null);
  };

  return (
    <div className="bg-[#252525] p-4 rounded-lg">
      <table className="w-full text-white">
        <thead>
          <tr className="text-gray-400 text-sm font-medium border-b border-gray-700">
            <th className="p-2 w-[5%]"><Checkbox className="border-white" /></th>
            <th className="p-2 w-[10%] text-left">ID</th>
            <th className="p-2 w-[15%] text-left">Name</th>
            <th className="p-2 w-[15%] text-left">Date</th>
            <th className="p-2 w-[10%] text-left">Timings</th>
            <th className="p-2 w-[45%] text-left">Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {staffDetail.map((staff) => (
            <tr key={staff.id} className="border-b border-gray-700 text-white">
              <td className="p-2"></td>
              <td className="p-2 text-white font-[Poppins] text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                #{staff.id}
              </td>
              <td className="p-2 flex items-center space-x-3">
                <img src={staff.image} alt={staff.name} className="w-[1.6875rem] h-[1.6875rem]" />
                <div>
                  <p className="font-[Poppins] text-[0.875rem] font-normal leading-[1.3125rem] text-left text-white">{staff.name}</p>
                  <p className="font-[Poppins] text-[0.75rem] font-normal leading-[1.125rem] text-left text-[#FAC1D9]">
                      {staff.role}
                  </p>
                </div>
              </td>
              <td className="p-2">16-Apr-2024</td>
              <td className="p-2">{staff.timing}</td>

              {/* Status Button */}
              <td className="p-2 relative">
                {openStatusId === staff.id ? (
                  <div className="flex space-x-2">
                    <button className="bg-[#FAC1D9] text-black px-4 py-1 rounded-md" onClick={() => handleSelectStatus(staff.id, "Present")}>Present</button>
                    <button className="bg-[#FFDF6B] text-black px-4 py-1 rounded-md" onClick={() => handleSelectStatus(staff.id, "Absent")}>Absent</button>
                    <button className="bg-[#6BE4FF] text-black px-4 py-1 rounded-md" onClick={() => handleSelectStatus(staff.id, "Half Shift")}>Half Shift</button>
                    <button className="bg-[#FF6A6A] text-black px-4 py-1 rounded-md" onClick={() => handleSelectStatus(staff.id, "Leave")}>Leave</button>
                  </div>
                ) : (
                  <button
                      className="bg-gray-600 text-white px-5 py-2 rounded-md w-32 flex items-center justify-between gap-2"
                      onClick={() => handleStatusClick(staff.id)}
                    >
                      <span>{statusMap[staff.id] || "Select"}</span>
                      <img src="attendance-pencil-icon.png" alt="Edit" className="w-4 h-4" />
                  </button>

                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
