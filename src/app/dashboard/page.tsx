import { QuickActions } from "@/components/dashboard/overview/quick-actions";
import { RecentActivity } from "@/components/dashboard/overview/recent-activity";
import { StatsGrid } from "@/components/dashboard/overview/stats-grid";
import { TeamPerformance } from "@/components/dashboard/overview/team-performance";
import { WelcomeSection } from "@/components/dashboard/overview/welcome-section";

const DashboardPage = () => (
  <div className="space-y-8">
    <WelcomeSection />
    <StatsGrid />
    <RecentActivity />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <QuickActions />
      <TeamPerformance />
    </div>
  </div>
);

export default DashboardPage;
