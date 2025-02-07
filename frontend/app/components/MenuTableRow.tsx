import { Pencil, Trash2 } from "lucide-react";

interface TableRowProps {
  id: string;
  name: string;
  stock: number;
  category: string;
  price: string;
  availability: string;
  image: string;
}

export default function MenuTableRow({ id, name, stock, category, price, availability, image }: TableRowProps) {
  return (
    <tr className="border-b border-gray-700">
      <td className="p-2"><input type="checkbox" /></td>
      <td className="p-2"><img src={image} alt={name} className="w-12 h-12 rounded-md" /></td>
      <td className="p-2">
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</div>
      </td>
      <td className="p-2 text-gray-400">#{id}</td>
      <td className="p-2">{stock} items</td>
      <td className="p-2">{category}</td>
      <td className="p-2">${price}</td>
      <td className={`p-2 ${availability === "In Stock" ? "text-green-400" : "text-red-400"}`}>
        {availability}
      </td>
      <td className="p-2 flex gap-2">
        <button className="text-gray-400 hover:text-white"><Pencil size={16} /></button>
        <button className="text-red-400 hover:text-red-500"><Trash2 size={16} /></button>
      </td>
    </tr>
  );
}
