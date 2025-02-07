import MenuTableRow from "./MenuTableRow";

interface MenuTableProps {
  data: any[];
}

export default function MenuTable({ data }: MenuTableProps) {
  return (
    <div className="mt-6 bg-[#292C2D] p-4 rounded-lg overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-[#333] text-left">
          <tr>
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2">Product</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Item ID</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Category</th>
            <th className="p-2">Price</th>
            <th className="p-2">Availability</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <MenuTableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
