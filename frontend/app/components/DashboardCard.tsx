interface DashboardCardProps {
    data: {
        title: string;
        figure: string;
        date?: string; 
        icon: string;
        chart: string;
    };
}

export default function DashboardCard({ data }: DashboardCardProps) {
    return (
        <div className="flex flex-col justify-between pt-3 pl-3 pr-3 w-[23.076rem] h-[10.4rem] text-white bg-[#292C2D] rounded-[0.625rem]">
            {/* First Row */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-between items-start">
                    <div className="w-fit h-[1.5rem] font-poppins text-[1rem] font-light leading-[1.5rem] text-left text-white">
                        {data.title}
                    </div>
                    <div className="w-[9.15rem] h-[2.375rem] font-poppins text-[1.5625rem] font-medium leading-[2.34375rem] text-left underline decoration-transparent text-white">
                        {data.figure}
                    </div>
                </div>
                <div>
                    <img src={data.icon} alt="icon" />
                </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-between items-center">
                <div className="w-[7.9375rem] h-[1.5rem] font-poppins text-[1rem] font-light leading-[1.5rem] text-left text-[#777979]">
                    {data.date || ""}
                </div>
                <div>
                    <img src={data.chart} alt="chart" />
                </div>
            </div>
        </div>
    );
}
