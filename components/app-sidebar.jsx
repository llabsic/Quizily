"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { authUser } from "@/lib/supabase";
import { History } from "lucide-react";
import { BookCopy } from "lucide-react";
import { Settings } from "lucide-react";
import { AppWindowMac } from "lucide-react";

export function AppSidebar({ ...props }) {
  const initialData = {
    user: {
      name: "quizi",
      email: "quizi@example.com",
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=quizi",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: AppWindowMac,
        isActive: true,
      },
      {
        title: "Courses",
        url: "/dashboard/courses",
        icon: BookCopy,
        isActive: true,
      },
      {
        title: "History",
        url: "/dashboard/history",
        icon: History,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "/company/support",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "/company/feedback",
        icon: Send,
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
  (async () => {
    const userData = await authUser();

    const email = userData?.data?.session?.user?.email;
    const user = userData?.data?.session?.user.user_metadata.full_name;
    const avatar = userData?.data?.session?.user.user_metadata.avatar_url;

    if (email) {
      setData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          email,
          name: user,
          avatar
        },
      }));
    }
  })();
}, []);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Quizily</span>
                  <span className="truncate text-xs">lixril</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        { data ? <NavUser user={data.user} /> : null }
      </SidebarFooter>
    </Sidebar>
  );
}
