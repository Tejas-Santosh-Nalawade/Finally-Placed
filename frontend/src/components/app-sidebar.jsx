import React from 'react';
import {
  Calendar,
  Home,
  User,
  Briefcase,
  FileText,
  BrainCog,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const mainItems = [
  {
    title: "Dashboard",
    url: "/app",
    icon: Home,
  },
  {
    title: "Interview",
    url: "/app/interview",
    icon: BrainCog,
    active: true,
  },
  {
    title: "Resume",
    url: "/app/resume",
    icon: FileText,
  },
  {
    title: "Job Recommentation",
    url: "/app/job",
    icon: Briefcase,
  },
];

const generalItems = [
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Setting",
    url: "#",
    icon: Settings,
  },
];

import {Link , useLocation} from 'react-router-dom';

export default function AppSidebar() {
  const location = useLocation();
  return (
    <div className="relative h-full">
      <Sidebar className="bg-[#121212] text-gray-300 border-r border-gray-800 h-full flex flex-col">
        <SidebarContent className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-4 mb-4">
            
            <span className="font-semibold text-white">Finally Placed</span>
          </div>
          
          {/* Main menu */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-4 py-2 text-sm text-gray-400">
              Main Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                    <Link
                         to={item.url}
                         className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                           location.pathname === item.url
                             ? "bg-purple-600 text-white" 
                             : "hover:bg-gray-800 hover:text-white"
                         } transition-all`}
                       >
                        <item.icon className={`w-5 h-5 ${item.active ? "text-white" : "text-gray-400"}`} />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* General menu */}
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="px-4 py-2 text-sm text-gray-400">
              General
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {generalItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                      >
                        <item.icon className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Dotted pattern background */}
          <div className="relative flex-grow overflow-hidden">
            <div className="absolute inset-0 opacity-50" 
                 style={{
                   backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
                   backgroundSize: '12px 12px'
                 }} />
          </div>
          
          {/* Logout button */}
          <div className="mt-auto mb-4 px-4">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Log Out</span>
            </a>
          </div>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}