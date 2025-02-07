interface CategoryCardProps {
    name: string;
    count: number;
    icon: string;
  }
  
  export default function MenuCategoryCard({ name, count, icon }: CategoryCardProps) {
    return (
      <div className="flex flex-col items-center justify-center bg-[#292C2D] px-4 py-3 rounded-lg text-center">
        <span className="text-2xl">{icon}</span>
        <p className="text-white">{name}</p>
        <p className="text-sm text-gray-400">{count} items</p>
      </div>
    );
  }
  