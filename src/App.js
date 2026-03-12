import React from "react"
import { Routes, Route } from "react-router-dom"
import { WorkspaceLayout } from "./components/WorkspaceLayout/WorkspaceLayout"
import HomePage from "./pages/HomePage/HomePage"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import { TeamChatPage } from "./pages/TeamChatPage/TeamChatPage"
import TasksPage from "./pages/TasksPage/TasksPage"
import PullRequestsPage from "./pages/PullRequestsPage/PullRequestsPage"
import DevNotesPage from "./pages/DevNotesPage/DevNotesPage"
import StandupPage from "./pages/StandupPage/StandupPage"
import DeployPage from "./pages/DeployPage/DeployPage"
import CalendarPage from "./pages/CalendarPage/CalendarPage"

function App() {
  return (
    <Routes>
      <Route element={<WorkspaceLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<TeamChatPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/pull-requests" element={<PullRequestsPage />} />
        <Route path="/dev-notes" element={<DevNotesPage />} />
        <Route path="/standup" element={<StandupPage />} />
        <Route path="/deploy" element={<DeployPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  )
}

export default App