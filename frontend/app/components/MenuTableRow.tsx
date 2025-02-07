import { Checkbox } from "@/components/ui/checkbox";

interface TableRowProps {
  index:number,
  id: string;
  name: string;
  stock: number;
  category: string;
  price: string;
  availability: string;
  image: string;
}

export default function MenuTableRow({ index, id, name, stock, category, price, availability, image }: TableRowProps) {
  return (
    <tr className={`border-b border-gray-700 text-white ${index%2 ===0 ? "bg-[#3D4142]" : "bg-[#292C2D]"}`}>
      <td className="p-2">
        <Checkbox className="border-white" />
      </td>
      <td className="p-2"><img src={image} alt={name} className="w-[5rem] h-[5rem]" /></td>
      <td className="p-2">
        <div className="font-poppins text-white text-[0.875rem] font-normal leading-[1.3125rem] text-left">
          {name}
        </div>
        <div className="font-poppins text-[#ADADAD] text-[0.875rem] font-light leading-[1.3125rem] text-left">
          Lorem ipsum dolor sit amet.
        </div>
      </td>
      <td className="p-2 text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-center">
        #{id}
      </td>
      <td className="p-2 text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-center">
        {stock} items
      </td>
      <td className="p-2 text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-center">
        {category}
      </td>
      <td className="p-2 text-white font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-center">
        ${price}
      </td>
      <td className="p-2 text-center">
        <div
          className={`flex justify-center items-center px-4 py-2 rounded-md font-medium ${
            availability ? "text-[#F8C0D7]" : "text-red-500"
          }`}
        >
          {availability ? "In Stock" : "Out of Stock"}
        </div>
      </td>
      <td className="p-2 ">
        <div className="flex gap-2 justify-center items-center text-center">
          <button className="text-gray-400 hover:text-white flex justify-center items-center w-6 h-6">
            <img src="menu-edit-icon.png" alt="" className="w-full h-full object-contain" />
          </button>
          <button className="text-red-400 hover:text-red-500 flex justify-center items-center w-6 h-6">
            <img src="menu-delete-icon.png" alt="" className="w-full h-full object-contain" />
          </button>
        </div>
        
      </td>
    </tr>

  );
}
