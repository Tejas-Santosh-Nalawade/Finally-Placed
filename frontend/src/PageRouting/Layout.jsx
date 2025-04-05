import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <AppSidebar className="fixed h-full" />
        
        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-auto">
          <SidebarTrigger className="md:hidden" />
          
          {/* Full height content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}