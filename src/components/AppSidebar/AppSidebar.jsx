import React from "react"
import { NavLink } from "react-router-dom"
import {
  Home,
  LayoutDashboard,
  MessageSquareText,
  KanbanSquare,
  GitPullRequestArrow,
  NotebookPen,
  SunMedium,
  Rocket,
  CalendarDays
} from "lucide-react"
import {
  SidebarContainer,
  Brand,
  BrandBadge,
  NavSection,
  NavItem,
  FooterCard,
  NavIcon
} from "./AppSidebarStyle"

const navItems = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/chat", label: "Team Chat", icon: MessageSquareText },
  { to: "/tasks", label: "Tasks", icon: KanbanSquare },
  { to: "/pull-requests", label: "Pull Requests", icon: GitPullRequestArrow },
  { to: "/dev-notes", label: "Dev Notes", icon: NotebookPen },
  { to: "/standup", label: "Standup", icon: SunMedium },
  { to: "/deploy", label: "Deploy", icon: Rocket },
  { to: "/calendar", label: "Calendar", icon: CalendarDays }
]

export const AppSidebar = () => {
  return (
    <SidebarContainer>
      <Brand>
        <BrandBadge>T4</BrandBadge>

        <div>
          <h1>T4LK</h1>
          <p>Dev Collaboration Platform</p>
        </div>
      </Brand>

      <NavSection>
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <NavItem key={item.to}>
              <NavLink to={item.to} end={item.end}>
                <NavIcon>
                  <Icon size={18} strokeWidth={2.1} />
                </NavIcon>
                {item.label}
              </NavLink>
            </NavItem>
          )
        })}
      </NavSection>

      <FooterCard>
        <strong>Workspace Mode</strong>
        <p>Small team collaboration hub for developers.</p>
      </FooterCard>
    </SidebarContainer>
  )
}