import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Mail, Phone, MoreHorizontal } from "lucide-react";

const TeamManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior QA Inspector',
      email: 'sarah.chen@buildvision.ai',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      assignedProjects: 3,
      resolvedIssues: 24,
      averageResponseTime: '2.3 hours',
      specializations: ['Structural', 'Electrical']
    },
    {
      id: 2,
      name: 'Mike Wilson',
      role: 'Construction Supervisor',
      email: 'mike.wilson@buildvision.ai',
      phone: '+1 (555) 234-5678',
      status: 'Active',
      assignedProjects: 2,
      resolvedIssues: 18,
      averageResponseTime: '1.8 hours',
      specializations: ['HVAC', 'Plumbing']
    },
    {
      id: 3,
      name: 'Tom Rodriguez',
      role: 'Quality Control Engineer',
      email: 'tom.rodriguez@buildvision.ai',
      phone: '+1 (555) 345-6789',
      status: 'Active',
      assignedProjects: 4,
      resolvedIssues: 31,
      averageResponseTime: '3.1 hours',
      specializations: ['Concrete', 'Foundation']
    },
    {
      id: 4,
      name: 'Lisa Park',
      role: 'Site Safety Manager',
      email: 'lisa.park@buildvision.ai',
      phone: '+1 (555) 456-7890',
      status: 'On Leave',
      assignedProjects: 1,
      resolvedIssues: 15,
      averageResponseTime: '2.7 hours',
      specializations: ['Safety', 'Compliance']
    },
    {
      id: 5,
      name: 'James Smith',
      role: 'Electrical Inspector',
      email: 'james.smith@buildvision.ai',
      phone: '+1 (555) 567-8901',
      status: 'Active',
      assignedProjects: 2,
      resolvedIssues: 22,
      averageResponseTime: '1.5 hours',
      specializations: ['Electrical', 'Fire Safety']
    }
  ];

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'Active':
        return 'outline';
      case 'On Leave':
        return 'secondary';
      case 'Inactive':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
          <p className="text-muted-foreground mt-1">Manage your quality control team and assignments</p>
        </div>
        <Button variant="hero">
          <Plus className="h-4 w-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">4</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">2.3h</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Member Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                        <Badge variant={getStatusVariant(member.status)}>
                          {member.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-medium">{member.role}</p>
                      
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="h-4 w-4 mr-2" />
                          {member.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="h-4 w-4 mr-2" />
                          {member.phone}
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="text-sm font-medium text-foreground mb-1">Specializations:</div>
                        <div className="flex flex-wrap gap-1">
                          {member.specializations.map((spec, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Active Projects</div>
                      <div className="text-xl font-bold text-primary">{member.assignedProjects}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Resolved Issues</div>
                      <div className="text-xl font-bold text-success">{member.resolvedIssues}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Avg Response Time</div>
                      <div className="text-xl font-bold text-accent">{member.averageResponseTime}</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-1 flex lg:flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    Assign Projects
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 lg:flex-none">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Team Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-success/5 border border-success/20 rounded-lg">
              <div className="text-2xl font-bold text-success mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Issue Resolution Rate</div>
              <div className="text-xs text-muted-foreground mt-1">+5% this month</div>
            </div>
            <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">2.3h</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
              <div className="text-xs text-muted-foreground mt-1">-15min improvement</div>
            </div>
            <div className="text-center p-4 bg-warning/5 border border-warning/20 rounded-lg">
              <div className="text-2xl font-bold text-warning mb-2">12</div>
              <div className="text-sm text-muted-foreground">Active Assignments</div>
              <div className="text-xs text-muted-foreground mt-1">Well distributed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamManagement;