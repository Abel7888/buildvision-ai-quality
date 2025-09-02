import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Download, Calendar } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Analytics = () => {
  // Mock data for analytics
  const trendData = [
    { month: 'Jan', defects: 15, resolved: 12, cost: 25000 },
    { month: 'Feb', defects: 22, resolved: 18, cost: 32000 },
    { month: 'Mar', defects: 18, resolved: 20, cost: 28000 },
    { month: 'Apr', defects: 25, resolved: 22, cost: 35000 },
    { month: 'May', defects: 20, resolved: 24, cost: 30000 },
    { month: 'Jun', defects: 16, resolved: 19, cost: 22000 },
  ];

  const materialDefects = [
    { material: 'Concrete', defects: 45, percentage: 35 },
    { material: 'Steel', defects: 32, percentage: 25 },
    { material: 'Electrical', defects: 28, percentage: 22 },
    { material: 'HVAC', defects: 23, percentage: 18 },
  ];

  const locationData = [
    { location: 'Building A', high: 8, medium: 12, low: 15 },
    { location: 'Building B', high: 5, medium: 18, low: 22 },
    { location: 'Building C', high: 12, medium: 8, low: 10 },
    { location: 'Site Perimeter', high: 3, medium: 6, low: 12 },
  ];

  const predictiveData = [
    { week: 'Week 1', predicted: 8, actual: 7 },
    { week: 'Week 2', predicted: 12, actual: 11 },
    { week: 'Week 3', predicted: 6, actual: 8 },
    { week: 'Week 4', predicted: 15, actual: 14 },
    { week: 'Week 5', predicted: 9, actual: null },
    { week: 'Week 6', predicted: 11, actual: null },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Insights and trends for construction quality control</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Defect Detection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">95.2%</div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2.3% this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2.4 days</div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              -15% faster
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$142K</div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +28% this quarter
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recurrence Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4.2%</div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              -8% improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Defect Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Defect Trends Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="defects" stroke="hsl(var(--destructive))" strokeWidth={2} />
                <Line type="monotone" dataKey="resolved" stroke="hsl(var(--success))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Material Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Defects by Material Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={materialDefects}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="material" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="defects" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Location Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Issues by Location & Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="high" stackId="a" fill="hsl(var(--destructive))" />
                <Bar dataKey="medium" stackId="a" fill="hsl(var(--warning))" />
                <Bar dataKey="low" stackId="a" fill="hsl(var(--success))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Predictive Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Predictive Model Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={predictiveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                <Area type="monotone" dataKey="actual" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Insights Panel */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">🎯 Key Finding</h4>
              <p className="text-muted-foreground">
                Concrete defects show a 23% increase during high-temperature days. 
                Consider adjusting curing procedures for summer months.
              </p>
            </div>
            
            <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg">
              <h4 className="font-semibold text-warning mb-2">⚠️ Risk Alert</h4>
              <p className="text-muted-foreground">
                Building C shows higher defect recurrence rates. Recommend additional 
                quality checkpoints and supervisor training.
              </p>
            </div>
            
            <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
              <h4 className="font-semibold text-success mb-2">✅ Optimization</h4>
              <p className="text-muted-foreground">
                Early detection systems have reduced rework costs by 60% compared to 
                traditional inspection methods. ROI achieved in 4.2 months.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;