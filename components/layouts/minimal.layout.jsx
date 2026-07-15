"use client";

import { usePathname } from "next/navigation";
import { Button, ButtonGroup, Tooltip } from "@heroui/react";
import { LayoutDashboard } from "@mynaui/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { NotificationButton } from "../custom/notification.minor";
import { ThemeSwitch } from "../custom/switch.theme";
import { getMenuItems } from "@/config/data";
import { FooterSidebar } from "../custom/footer-sidebar";
import { AvaterProfile } from "../custom/profile.minor";
import { BreadcrumbsMinor } from "../custom/breadcrumbs.minor";
import SettingDrawerButton from "../custom/setting-drawer.minor";
import { FabButton } from "../custom/fab-button";

export function MinimaDashboard({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const icons = getMenuItems();

  return (
    <div className="w-full min-h-svh flex bg-background-secondary dark:bg-background-inverse/2">
      <FabButton className="bottom-5 right-5 z-10 p-6 rounded-2xl fixed" />
      <aside className="hidden lg:flex lg:w-20 lg:fixed lg:h-screen py-8 flex-col items-center justify-between">
        <Link href="/dashboard">
          <LayoutDashboard
            className={`text-background-inverse cursor-pointer ${pathname === "/dashboard" ? "text-background-inverse" : "text-muted"}`}
          />
        </Link>
        <nav className="flex flex-col gap-6 w-full">
          {icons.map((Icon, i) => (
            <Tooltip delay={0} key={i}>
              <Tooltip.Trigger>
                <Link href={Icon.url}>
                  <button
                    className="group relative w-full flex items-center justify-center py-3 cursor-pointer"
                  >
                    <div
                      className={`absolute left-0 h-full ${
                        pathname == Icon.url ? "w-1" : "w-[2px]"
                      } bg-background-inverse ${
                        pathname == Icon.url ? "opacity-100" : "opacity-0"
                      } group-hover:opacity-100 transition-all rounded-r-lg`}
                    />
                    <Icon.icon
                      className={
                        (pathname == Icon.url && pathname !== "/institute"
                          ? "text-background-inverse"
                          : "text-muted") + " transition-all"
                      }
                    />
                  </button>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Content placement="right">{Icon.title}</Tooltip.Content>
            </Tooltip>
          ))}
        </nav>

        <FooterSidebar />
      </aside>

      <main className="flex-1 min-h-screen min-w-0 p-5 bg-background m-1 lg:m-3 rounded-3xl shadow-sm lg:ml-[92px] space-y-3">
        <div className="w-full flex justify-between items-center h-10">
          <div className="flex gap-2 items-center justify-start">
            <BreadcrumbsMinor />
          </div>
          <div className="items-center justify-between gap-2 hidden lg:flex">

            <ButtonGroup>
              <NotificationButton />
              <SettingDrawerButton />
            </ButtonGroup>
            <ThemeSwitch />
            <AvaterProfile />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
