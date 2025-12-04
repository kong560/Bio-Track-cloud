'use client';

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { eachDayOfInterval, subDays, format } from 'date-fns';

const today = new Date();
const last30Days = eachDayOfInterval({
  start: subDays(today, 29),
  end: today,
});

const data = last30Days.map(day => ({
  date: format(day, 'MMM d'),
  observations: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
}));

const chartConfig = {
  observations: {
    label: 'Observations',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function ObservationTrendChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
          <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis />
            <Tooltip
                cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 2, strokeDasharray: '3 3' }}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Observations
                            </span>
                            <span className="font-bold text-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  return null
                }}
              />
            <defs>
                <linearGradient id="fillObservations" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-observations)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--color-observations)" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="observations"
              stroke="var(--color-observations)"
              fillOpacity={1} 
              fill="url(#fillObservations)"
            />
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
