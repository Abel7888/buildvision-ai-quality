import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardHome from "@/components/dashboard/DashboardHome";
import DefectReports from "@/components/dashboard/DefectReports";
import Analytics from "@/components/dashboard/Analytics";
import QALogs from "@/components/dashboard/QALogs";
import TeamManagement from "@/components/dashboard/TeamManagement";
import Settings from "@/components/dashboard/Settings";

type DashboardView = 'home' | 'defects' | 'qa-logs' | 'analytics' | 'team' | 'settings';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState<DashboardView>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'defects':
        return <DefectReports />;
      case 'qa-logs':
        return <QALogs />;
      case 'analytics':
        return <Analytics />;
      case 'team':
        return <TeamManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar 
          currentView={currentView} 
          onViewChange={(view) => setCurrentView(view as DashboardView)} 
        />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;