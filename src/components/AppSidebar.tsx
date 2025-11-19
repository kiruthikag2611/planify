"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Wrench,
  Settings,
  Bell,
  HelpCircle,
  Clock,
  LogOut
} from "lucide-react"

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { PlanifyLogo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/tasks", label: "Tasks & Activities", icon: ClipboardList },
    { href: "/tools", label: "Tools", icon: Wrench,
      subMenu: [
        { href: "/tools/timer", label: "Focus Timer", icon: Clock },
        { href: "/tools/notifications", label: "Notifications", icon: Bell },
        { href: "/tools/settings", label: "Settings", icon: Settings },
        { href: "/tools/help", label: "Help Center", icon: HelpCircle },
      ]
    },
  ]

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <PlanifyLogo className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Planify</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href)}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
           <SidebarMenuItem>
             <SidebarMenuButton asChild>
                <Link href="/">
                    <LogOut />
                    <span>Logout</span>
                </Link>
             </SidebarMenuButton>
           </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
