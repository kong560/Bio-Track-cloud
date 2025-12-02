import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SpeciesOverviewChart from './_components/species-overview-chart';
import ConservationStatusChart from './_components/conservation-status-chart';
import ObservationTrendChart from './_components/observation-trend-chart';
import { Activity, LayoutGrid, BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Dashboard</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Visualizing Biodiversity Data Insights
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Observations</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,231</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Species Identified</CardTitle>
            <LayoutGrid className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,892</div>
            <p className="text-xs text-muted-foreground">+80 new species this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Regions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+5 active regions this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Species Overview</CardTitle>
            <CardDescription>Number of observations per species category.</CardDescription>
          </CardHeader>
          <CardContent>
            <SpeciesOverviewChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conservation Status</CardTitle>
            <CardDescription>Breakdown of observed species by IUCN status.</CardDescription>
          </CardHeader>
          <CardContent>
            <ConservationStatusChart />
          </CardContent>
        </Card>
      </div>

       <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Observation Trends</CardTitle>
            <CardDescription>Observations recorded over the last 30 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <ObservationTrendChart />
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
