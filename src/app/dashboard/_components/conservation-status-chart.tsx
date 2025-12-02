'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Least Concern', value: 400, color: '#22c55e' },
  { name: 'Near Threatened', value: 300, color: '#facc15' },
  { name: 'Vulnerable', value: 150, color: '#f97316' },
  { name: 'Endangered', value: 80, color: '#ef4444' },
  { name: 'Critically Endangered', value: 50, color: '#991b1b' },
];

const chartConfig = {
    count: {
      label: "Species"
    }
} satisfies ChartConfig

export default function ConservationStatusChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
            <PieChart>
                <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} innerRadius={80} labelLine={false} >
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
