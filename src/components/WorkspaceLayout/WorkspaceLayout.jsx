import React from "react"
import { Outlet } from "react-router-dom"
import { AppSidebar } from "../AppSidebar/AppSidebar"
import {
  WorkspaceContainer,
  WorkspaceContent
} from "./WorkspaceLayoutStyle"

export const WorkspaceLayout = () => {
  return (
    <WorkspaceContainer>
      <AppSidebar />
      <WorkspaceContent>
        <Outlet />
      </WorkspaceContent>
    </WorkspaceContainer>
  )
}