import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Save, Bell, Shield, Database, Zap } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Configure your BuildVision AI platform</p>
        </div>
        <Button variant="hero">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Your Construction Company" defaultValue="BuildVision Demo Corp" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" placeholder="Current Project" defaultValue="Downtown Tower Complex" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="site-location">Site Location</Label>
            <Input id="site-location" placeholder="Construction site address" defaultValue="123 Construction Ave, San Francisco, CA" />
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Platform Preferences</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-refresh">Auto-refresh Dashboard</Label>
                  <p className="text-sm text-muted-foreground">Automatically update data every 30 seconds</p>
                </div>
                <Switch id="auto-refresh" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sound-alerts">Sound Alerts</Label>
                  <p className="text-sm text-muted-foreground">Play notification sounds for critical alerts</p>
                </div>
                <Switch id="sound-alerts" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="compact-view">Compact View</Label>
                  <p className="text-sm text-muted-foreground">Show more information in less space</p>
                </div>
                <Switch id="compact-view" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Email Notifications</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="high-priority">High Priority Defects</Label>
                  <p className="text-sm text-muted-foreground">Immediate email for critical issues</p>
                </div>
                <Switch id="high-priority" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="daily-summary">Daily Summary</Label>
                  <p className="text-sm text-muted-foreground">Daily report of all activities</p>
                </div>
                <Switch id="daily-summary" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-analytics">Weekly Analytics</Label>
                  <p className="text-sm text-muted-foreground">Comprehensive weekly performance report</p>
                </div>
                <Switch id="weekly-analytics" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Alert Thresholds</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="defect-threshold">Defect Detection Confidence (%)</Label>
                <Input id="defect-threshold" type="number" defaultValue="85" min="50" max="100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="response-threshold">Response Time Alert (hours)</Label>
                <Input id="response-threshold" type="number" defaultValue="4" min="1" max="24" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Model Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="h-5 w-5 mr-2" />
            AI Model Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Detection Models</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="crack-detection">Crack Detection Model</Label>
                  <p className="text-sm text-muted-foreground">Structural crack identification</p>
                </div>
                <Switch id="crack-detection" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="surface-analysis">Surface Quality Analysis</Label>
                  <p className="text-sm text-muted-foreground">Paint, finish, and surface defects</p>
                </div>
                <Switch id="surface-analysis" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="alignment-check">Alignment Verification</Label>
                  <p className="text-sm text-muted-foreground">Component positioning and alignment</p>
                </div>
                <Switch id="alignment-check" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Model Performance</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-success/5 border border-success/20 rounded-lg">
                <div className="text-2xl font-bold text-success">95.2%</div>
                <div className="text-sm text-muted-foreground">Overall Accuracy</div>
              </div>
              <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">1.3s</div>
                <div className="text-sm text-muted-foreground">Avg Processing Time</div>
              </div>
              <div className="text-center p-4 bg-warning/5 border border-warning/20 rounded-lg">
                <div className="text-2xl font-bold text-warning">v2.1.4</div>
                <div className="text-sm text-muted-foreground">Model Version</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Security & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Data Security</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="data-encryption">End-to-End Encryption</Label>
                  <p className="text-sm text-muted-foreground">Encrypt all data transmissions</p>
                </div>
                <Switch id="data-encryption" defaultChecked disabled />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="audit-logging">Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">Log all user activities</p>
                </div>
                <Switch id="audit-logging" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                </div>
                <Switch id="two-factor" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Data Retention</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image-retention">Image Data Retention (days)</Label>
                <Input id="image-retention" type="number" defaultValue="90" min="30" max="365" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="log-retention">Log Data Retention (days)</Label>
                <Input id="log-retention" type="number" defaultValue="180" min="90" max="730" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;