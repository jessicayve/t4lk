import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { AppSidebar } from "../AppSidebar/AppSidebar"
import {
  WorkspaceContainer,
  DesktopSidebarSlot,
  SidebarOverlay,
  SidebarMobileWrapper,
  WorkspaceContent,
  MobileTopbar,
  MobileMenuButton,
  MobileTopbarTitle
} from "./WorkspaceLayoutStyle"

export const WorkspaceLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileSidebarOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setIsMobileSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <WorkspaceContainer>
      <DesktopSidebarSlot>
        <AppSidebar />
      </DesktopSidebarSlot>

      <SidebarOverlay
        $isOpen={isMobileSidebarOpen}
        onClick={() => setIsMobileSidebarOpen(false)}
        aria-label="Close menu overlay"
      />

      <SidebarMobileWrapper $isOpen={isMobileSidebarOpen}>
        <AppSidebar />
      </SidebarMobileWrapper>

      <WorkspaceContent>
        <MobileTopbar>
          <MobileMenuButton
            type="button"
            onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
            aria-label={isMobileSidebarOpen ? "Close menu" : "Open menu"}
          >
            {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </MobileMenuButton>

          <MobileTopbarTitle>T4LK</MobileTopbarTitle>
        </MobileTopbar>

        <Outlet />
      </WorkspaceContent>
    </WorkspaceContainer>
  )
}