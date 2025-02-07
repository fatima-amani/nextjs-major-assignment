"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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

export default function DashboardLineChart() {
  return (
    <Card className="bg-black w-[68.2rem] h-[20rem] flex flex-col justify-between">
      {/* Chart Section */}
      <CardContent className="bg-black">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-white"
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
      </CardContent>

      {/* Month Labels */}
      {/* <CardFooter className="flex justify-between items-center text-white px-6 mt-2">
        {chartData.map((data) => (
          <div key={data.month} className="text-sm">
            {data.month}
          </div>
        ))}
      </CardFooter> */}
    </Card>
  );
}
