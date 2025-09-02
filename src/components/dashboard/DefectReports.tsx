import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Eye, Download, Filter } from "lucide-react";

const DefectReports = () => {
  const defects = [
    {
      id: 'DEF-001',
      type: 'Structural Crack',
      severity: 'High',
      location: 'Building A - Floor 2, Wall Section C',
      assignedTo: 'Mike Wilson',
      status: 'Open',
      dateDetected: '2024-01-15',
      description: 'Horizontal crack detected in concrete wall, approximately 15cm length',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'DEF-002',
      type: 'Material Misalignment',
      severity: 'Medium',
      location: 'Building B - HVAC Room',
      assignedTo: 'Sarah Chen',
      status: 'In Progress',
      dateDetected: '2024-01-14',
      description: 'HVAC unit installation angle deviation from specifications',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'DEF-003',
      type: 'Surface Defect',
      severity: 'Low',
      location: 'Building A - Exterior Wall',
      assignedTo: 'Tom Rodriguez',
      status: 'Resolved',
      dateDetected: '2024-01-13',
      description: 'Minor surface inconsistency in paint application',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'DEF-004',
      type: 'Foundation Settlement',
      severity: 'High',
      location: 'Building C - Northeast Corner',
      assignedTo: 'Lisa Park',
      status: 'Open',
      dateDetected: '2024-01-12',
      description: 'Potential foundation settlement detected through sensor monitoring',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'DEF-005',
      type: 'Electrical Hazard',
      severity: 'Medium',
      location: 'Building B - Floor 3',
      assignedTo: 'James Smith',
      status: 'In Progress',
      dateDetected: '2024-01-11',
      description: 'Exposed wiring detected in electrical panel area',
      image: '/api/placeholder/300/200'
    }
  ];

  const getSeverityVariant = (severity: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (severity) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'Open':
        return 'destructive';
      case 'In Progress':
        return 'secondary';
      case 'Resolved':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Defect Reports</h1>
          <p className="text-muted-foreground mt-1">Monitor and manage all detected construction defects</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Defects</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <AlertCircle className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold text-destructive">2</p>
              </div>
              <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-warning">2</p>
              </div>
              <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolved</p>
                <p className="text-2xl font-bold text-success">1</p>
              </div>
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Defect List */}
      <div className="space-y-4">
        {defects.map((defect) => (
          <Card key={defect.id}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Image Preview */}
                <div className="lg:col-span-1">
                  <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Defect Image</span>
                  </div>
                </div>

                {/* Defect Details */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{defect.type}</h3>
                      <p className="text-sm text-muted-foreground">ID: {defect.id}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant={getSeverityVariant(defect.severity)}>
                        {defect.severity} Priority
                      </Badge>
                      <Badge variant={getStatusVariant(defect.status)}>
                        {defect.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p><span className="font-medium">Location:</span> {defect.location}</p>
                    <p><span className="font-medium">Assigned to:</span> {defect.assignedTo}</p>
                    <p><span className="font-medium">Detected:</span> {defect.dateDetected}</p>
                    <p><span className="font-medium">Description:</span> {defect.description}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-1 flex lg:flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DefectReports;