'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { category: 'Mammals', count: 186 },
  { category: 'Birds', count: 305 },
  { category: 'Reptiles', count: 237 },
  { category: 'Amphibians', count: 73 },
  { category: 'Insects', count: 400 },
  { category: 'Fish', count: 210 },
  { category: 'Plants', count: 550 },
];

const chartConfig = {
  count: {
    label: 'Observations',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;


export default function SpeciesOverviewChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="category" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis />
                <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={4} />
            </BarChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
