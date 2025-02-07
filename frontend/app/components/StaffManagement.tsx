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

export default function StaffManagement({ staffDetail }: StaffManagementProps) {
  return (
    <div className="bg-[#252525] p-4 rounded-lg">
      <table className="w-full text-white">
        {/* Table Head */}
        <thead>
          <tr className="text-gray-400 text-sm font-medium border-b border-gray-700">
            <th className="p-2"><Checkbox className="border-white" /></th>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Phone</th>
            <th className="p-2 text-left">Age</th>
            <th className="p-2 text-left">Salary</th>
            <th className="p-2 text-left">Timings</th>
            <th className="p-2"></th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {staffDetail.map((staff, index) => (
            <tr key={staff.id} className={`border-b border-gray-700 text-white 
              ${index%2 ===0 ? "bg-[#3D4142]" : "bg-[#292C2D]"}`}>
              <td className="p-2"><Checkbox className="border-white" />
              </td>
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
              <td className="p-2 text-white font-[Poppins] text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                {staff.email}
              </td>
              <td className="p-2 text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                {staff.phone}
              </td>
              <td className="p-2  text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                {staff.age} yr
              </td>
              <td className="p-2  text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                ${staff.salary.toFixed(2)}
              </td>
              <td className="p-2  text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-left">
                {staff.timing}
              </td>
              <td className="p-2 flex space-x-3">
                
                {/* Action Icons (Replace with actual icons) */}
                <button className="">
                  <img src="/staff-eye-icon.png" alt="" />
                </button>
                <button className="">
                  <img src="/staff-edit-icon.png" alt="" />
                </button>
                <button className="">
                  <img src="staff-delete-icon.png" alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
