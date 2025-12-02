'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Least Concern', count: 400, color: 'hsl(var(--chart-2))' },
  { name: 'Near Threatened', count: 300, color: 'hsl(var(--chart-3))' },
  { name: 'Vulnerable', count: 150, color: 'hsl(var(--chart-4))' },
  { name: 'Endangered', count: 80, color: '#ef4444' },
  { name: 'Critically Endangered', count: 50, color: '#991b1b' },
];

const chartConfig = {
  count: {
    label: "Species"
  },
  "Least Concern": {
    label: "Least Concern",
    color: "hsl(var(--chart-2))",
  },
  "Near Threatened": {
    label: "Near Threatened",
    color: "hsl(var(--chart-3))",
  },
  "Vulnerable": {
    label: "Vulnerable",
    color: "hsl(var(--chart-4))",
  },
  "Endangered": {
    label: "Endangered",
    color: "#ef4444",
  },
  "Critically Endangered": {
    label: "Critically Endangered",
    color: "#991b1b",
  }
} satisfies ChartConfig

export default function ConservationStatusChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
            <PieChart>
                <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={data} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={120} innerRadius={80} labelLine={false} >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
