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
          {staffDetail.map((staff) => (
            <tr key={staff.id} className="border-b border-gray-700 text-white">
              <td className="p-2"><Checkbox className="border-white" />
              </td>
              <td className="p-2">#{staff.id}</td>
              <td className="p-2 flex items-center space-x-3">
                <img src={staff.image} alt={staff.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p>{staff.name}</p>
                  <p className="text-xs text-gray-400">{staff.role}</p>
                </div>
              </td>
              <td className="p-2">{staff.email}</td>
              <td className="p-2">{staff.phone}</td>
              <td className="p-2">{staff.age} yr</td>
              <td className="p-2">${staff.salary.toFixed(2)}</td>
              <td className="p-2">{staff.timing}</td>
              <td className="p-2 flex space-x-3">
                {/* Action Icons (Replace with actual icons) */}
                <button className="text-gray-400 hover:text-white">✏️</button>
                <button className="text-red-500 hover:text-red-700">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
