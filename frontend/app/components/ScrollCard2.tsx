interface Dish {
    img: string;
    title: string;
    detail: string;
    stock: boolean;
    price: number;
    qty:number;
}
  
interface ScrollCardProps {
    dish: Dish;
}
  
  export default function ScrollCard2({ dish }: ScrollCardProps) {
    return (
      <div className="flex justify-between items-center w-[full] p-2 h-[4.81rem] rounded-[0.464rem] bg-[#3D4142]">
        <div className="flex justify-between items-center">
          <div>
            <img
              src={dish.img}
              alt={dish.title}
              className="w-[5.57rem] h-[4.18rem] rounded-[0.325rem]"
            />
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="w-[9.56rem] h-[1.5rem] font-poppins text-[1rem] font-medium leading-[1.5rem] text-left text-white">
              {dish.title}
            </div>
            <div className="w-[8rem] h-[1.31rem] font-poppins text-[0.875rem] font-normal leading-[1.31rem] text-left text-white">
              <span>Order: x{dish.qty}</span>
              <span>${dish.price}</span>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col justify-around items-end">
          <div
            className={`w-fit h-[1.5rem] text-[1rem] font-normal leading-6 text-right font-[Poppins] ${
              dish.stock ? "text-[#FAC1D9]" : "text-[#F60000]"
            }`}
          >
            {dish.stock ? "In Stock" : "Out of Stock"}
          </div>
          <div className="w-[2.9375rem] h-[1.3125rem] text-[0.875rem] font-normal leading-[1.3125rem] text-right text-white font-[Poppins]">
            ${dish.price * dish.qty}.00
          </div>
        </div>
      </div>
    );
  }
  