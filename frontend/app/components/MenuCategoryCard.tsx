interface CategoryCardProps {
    name: string;
    count: number;
    icon: string;
  }
  
  export default function MenuCategoryCard({ name, count, icon }: CategoryCardProps) {
    return (
      <div className={`flex flex-wrap p-3 justify-between w-[10rem] h-[9.125rem] rounded-[0.625rem] ${name==="All" ? "bg-[#FAC1D9] text-[#333333]" : "bg-[#292C2D] text-white" }`}>
        <div className="flex flex-col justify-end h-full">
          <div className={`.font-poppins text-[1rem] font-medium leading-[1.5rem] text-left`}>
            {name}
          </div>
          <div className={`.font-poppins text-[1rem] font-light leading-[1.5rem] text-left`}>
            {count} items
          </div>
        </div>
        <div className="flex flex-col items-start">
          <img src={icon} alt="" className="w-[2.5rem] h-[2.5rem]
"/>
        </div>
      </div>
    );
  }
  