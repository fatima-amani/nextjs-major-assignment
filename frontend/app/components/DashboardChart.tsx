import { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "JAN", sales: 1500, revenue: 3000 },
  { month: "FEB", sales: 1800, revenue: 4500 },
  { month: "MAR", sales: 2000, revenue: 3500 },
  { month: "APR", sales: 1700, revenue: 2700 },
  { month: "MAY", sales: 2500, revenue: 5000 },
  { month: "JUN", sales: 2800, revenue: 4200 },
  { month: "JUL", sales: 3000, revenue: 4700 },
  { month: "AUG", sales: 2900, revenue: 4800 },
  { month: "SEP", sales: 2700, revenue: 4300 },
  { month: "OCT", sales: 2800, revenue: 4100 },
  { month: "NOV", sales: 2600, revenue: 3800 },
  { month: "DEC", sales: 2900, revenue: 5000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function DashboardChart() {
  const [active, setActive] = useState("Monthly");

  return (
    <div className="w-[1189px] h-[513.85px] p-6 rounded-lg">
      {/* Upper row */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col items-start gap-3">
          <div className="text-white font-[Poppins] text-2xl font-medium">
            Overview
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-2.5 rounded-full bg-[#FAC1D9]"></div>
              <span className="text-white text-base font-light">Sales</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-2.5 rounded-full bg-[#D9D9D9]"></div>
              <span className="text-white text-base font-light">Revenue</span>
            </div>
          </div>
        </div>

        {/* Button group */}
        <div className="flex gap-4">
          <div className="flex bg-[#3D4142] rounded-lg overflow-hidden">
            {["Monthly", "Daily", "Weekly"].map((label) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`px-4 py-2 transition-colors ${
                  active === label
                    ? "bg-[#FAC1D9] text-black"
                    : "bg-transparent text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button className="flex items-center justify-center px-4 py-2 border border-[#FAC1D9] rounded-lg text-[#FAC1D9] font-medium">
            <img src="export-logo.png" alt="Export" className="w-5 h-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Chart container */}
      <div className="w-full h-[400px]">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            width={1100}
            height={350}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#3D4142" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke="#fff"
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="sales"
              type="monotone"
              stroke="#FAC1D9"
              strokeWidth={3}
              dot={false}
            />
            <Line
              dataKey="revenue"
              type="monotone"
              stroke="#D9D9D9"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
