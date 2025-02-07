import DashboardLineChart from "./DashboardLineChart"
import { useState } from "react";

export default function DashboardChart(){
    const [active, setActive] = useState("Monthly");
    return(
        <div className="w-[95%] h-[32.12rem] bg-[#292C2D]">
            {/* upper row */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-start gap-5">
                    <div className="w-[7.3rem] h-[2.375rem] font-[Poppins] text-[1.5625rem] font-medium leading-[2.34375rem] text-left text-white">
                        Overview
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <div className="flex justify-between items-center gap-3">
                            <div className="w-[1.76125rem] h-[0.629375rem] rounded-[6.29125rem] bg-[#FAC1D9]"></div>
                            <div className="w-[2.625rem] h-[1.5rem] font-poppins text-[1.006875rem] font-light leading-[1.51rem] text-white">
                                Sales
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-3">
                            <div className="w-[1.76125rem] h-[0.629375rem] rounded-[6.29125rem] bg-[#D9D9D9]"></div>
                            <div className="w-[2.625rem] h-[1.5rem] font-poppins text-[1.006875rem] font-light leading-[1.51rem] text-white">
                                Revenue
                            </div>
                        </div>                        
                    </div>
                </div>

                {/* Button group */}
                <div className="flex justify-between">
                    <div className="w-[16.03875rem] h-[3.26125rem] flex">
                        {["Monthly", "Daily", "Weekly"].map((label) => (
                            <button
                            key={label}
                            onClick={() => setActive(label)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                active === label
                                ? "bg-[#FAC1D9] text-black"
                                : "bg-transparent text-white "
                            }`}
                            >
                            {label}
                            </button>
                        ))}
                    </div>

                    <div>
                        <button className="flex items-center justify-center w-[7.493rem] h-[3.261rem] rounded-[0.4675rem] border border-[#FAC1D9] gap-x-2 text-[1rem] font-medium leading-[1.5rem] text-[#FAC1D9] font-[Poppins]">
                            <img src="export-logo.png" alt="Export" className="w-[1.1325rem] h-[1.1325rem]" />
                            Export
                        </button>
                    </div>

                </div>
            </div>

            <div className="flex justify-start gap-5">
                <div className="flex flex-col text-white">
                    <div>
                        <DashboardLineChart />
                    </div>
                    
                </div>
                
                <div className="flex flex-col justify-between items-center text-white">
                    <div>5k</div>
                    <div>4k</div>
                    <div>3k</div>
                    <div>2k</div>
                    <div>1k</div>
                    <div>0</div>
                </div>
            </div>

            
        </div>
    )
}