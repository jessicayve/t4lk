import React from "react"
import {
  PageShell,
  HeroCard,
  Grid,
  Card
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const standups = [
  {
    name: "Mark",
    yesterday: "Reviewed flow improvements for the new platform home.",
    today: "Will refine dashboard priorities and quick action hierarchy.",
    blockers: "No blockers."
  },
  {
    name: "Lester",
    yesterday: "Built route structure and shared workspace layout.",
    today: "Will improve navigation states and page composition.",
    blockers: "Waiting for one review on layout spacing decisions."
  },
  {
    name: "Rebeca",
    yesterday: "Worked on reusable card patterns and UI polish.",
    today: "Will review kanban visuals and PR page consistency.",
    blockers: "Needs final direction on badge colors."
  }
]

const StandupPage = () => {
  return (
    <PageShell>
      <HeroCard>
        <h1>Standup Board</h1>
        <p>
          Daily progress updates for better visibility across the development team.
        </p>
      </HeroCard>

      <Grid>
        {standups.map((item) => (
          <Card key={item.name}>
            <h3>{item.name}</h3>

            <p style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#f8fafc" }}>Yesterday:</strong> {item.yesterday}
            </p>

            <p style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#f8fafc" }}>Today:</strong> {item.today}
            </p>

            <p>
              <strong style={{ color: "#f8fafc" }}>Blockers:</strong> {item.blockers}
            </p>
          </Card>
        ))}
      </Grid>
    </PageShell>
  )
}

export default StandupPage