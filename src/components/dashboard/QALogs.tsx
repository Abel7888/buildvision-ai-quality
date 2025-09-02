import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

const QALogs = () => {
  const qaLogs = [
    {
      id: 'QA-2024-001',
      timestamp: '2024-01-15 14:30:00',
      inspector: 'Sarah Chen',
      location: 'Building A - Floor 2',
      type: 'Automated Scan',
      result: 'Pass',
      details: 'Concrete curing inspection completed. No defects detected.',
      confidence: 98
    },
    {
      id: 'QA-2024-002',
      timestamp: '2024-01-15 11:15:00',
      inspector: 'Mike Wilson',
      location: 'Building B - HVAC Room',
      type: 'Manual Review',
      result: 'Fail',
      details: 'Material misalignment detected and flagged for correction.',
      confidence: 95
    },
    {
      id: 'QA-2024-003',
      timestamp: '2024-01-14 16:45:00',
      inspector: 'AI System',
      location: 'Building A - Exterior Wall',
      type: 'Automated Scan',
      result: 'Warning',
      details: 'Minor surface inconsistency detected. Recommend manual review.',
      confidence: 87
    },
    {
      id: 'QA-2024-004',
      timestamp: '2024-01-14 09:20:00',
      inspector: 'Tom Rodriguez',
      location: 'Building C - Foundation',
      type: 'Scheduled Inspection',
      result: 'Pass',
      details: 'Foundation integrity check completed successfully.',
      confidence: 99
    },
    {
      id: 'QA-2024-005',
      timestamp: '2024-01-13 13:10:00',
      inspector: 'Lisa Park',
      location: 'Building B - Floor 3',
      type: 'Manual Review',
      result: 'Pass',
      details: 'Electrical installation verified to meet safety standards.',
      confidence: 96
    },
    {
      id: 'QA-2024-006',
      timestamp: '2024-01-13 10:30:00',
      inspector: 'AI System',
      location: 'Building A - Roof Structure',
      type: 'Automated Scan',
      result: 'Fail',
      details: 'Structural integrity concern detected in beam joint.',
      confidence: 92
    }
  ];

  const getResultVariant = (result: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (result) {
      case 'Pass':
        return 'outline';
      case 'Fail':
        return 'destructive';
      case 'Warning':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Automated Scan':
        return 'text-primary';
      case 'Manual Review':
        return 'text-accent';
      case 'Scheduled Inspection':
        return 'text-success';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">QA Logs</h1>
          <p className="text-muted-foreground mt-1">Complete audit trail of quality assurance activities</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Filter by Date
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search logs by ID, location, or inspector..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-input rounded-md bg-background">
                <option>All Types</option>
                <option>Automated Scan</option>
                <option>Manual Review</option>
                <option>Scheduled Inspection</option>
              </select>
              <select className="px-3 py-2 border border-input rounded-md bg-background">
                <option>All Results</option>
                <option>Pass</option>
                <option>Fail</option>
                <option>Warning</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="text-sm text-muted-foreground">Total Inspections</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">18</div>
              <div className="text-sm text-muted-foreground">Passed</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive">4</div>
              <div className="text-sm text-muted-foreground">Failed</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">2</div>
              <div className="text-sm text-muted-foreground">Warnings</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* QA Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Quality Assurance Log Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {qaLogs.map((log) => (
              <div key={log.id} className="border border-border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-start">
                  {/* Log ID & Timestamp */}
                  <div className="md:col-span-2">
                    <div className="font-mono text-sm font-semibold text-primary">{log.id}</div>
                    <div className="text-xs text-muted-foreground">{log.timestamp}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Inspector:</span> {log.inspector}
                    </div>
                  </div>

                  {/* Location & Type */}
                  <div className="md:col-span-2">
                    <div className="font-medium text-foreground">{log.location}</div>
                    <div className={`text-sm font-medium ${getTypeColor(log.type)}`}>
                      {log.type}
                    </div>
                  </div>

                  {/* Result & Confidence */}
                  <div className="md:col-span-1">
                    <Badge variant={getResultVariant(log.result)} className="mb-2">
                      {log.result}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      Confidence: {log.confidence}%
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-1">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">{log.details}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-success/5 border border-success/20 rounded-lg">
              <div className="text-2xl font-bold text-success mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Overall Compliance Rate</div>
            </div>
            <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">96%</div>
              <div className="text-sm text-muted-foreground">AI Detection Accuracy</div>
            </div>
            <div className="text-center p-4 bg-warning/5 border border-warning/20 rounded-lg">
              <div className="text-2xl font-bold text-warning mb-2">2.1 days</div>
              <div className="text-sm text-muted-foreground">Avg. Response Time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QALogs;