import React from "react"
import {
  PageShell,
  HeroCard,
  Grid,
  Card,
  Badge
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const notes = [
  {
    title: "Architecture Notes",
    description: "Workspace layout, route composition and separation between platform shell and chat module.",
    tag: "Core"
  },
  {
    title: "Frontend Conventions",
    description: "Shared component rules, naming standards and styled-components usage guidelines.",
    tag: "Standards"
  },
  {
    title: "UI Patterns",
    description: "Cards, badges, grids, empty states and dashboard information hierarchy.",
    tag: "Design"
  },
  {
    title: "Deployment Notes",
    description: "Build expectations, CI flow and environment validation checklist.",
    tag: "Ops"
  }
]

const DevNotesPage = () => {
  return (
    <PageShell>
      <HeroCard>
        <h1>Dev Notes</h1>
        <p>
          Keep internal documentation accessible and organized for the team.
        </p>
      </HeroCard>

      <Grid>
        {notes.map((note) => (
          <Card key={note.title}>
            <Badge>{note.tag}</Badge>
            <h3 style={{ marginTop: "14px" }}>{note.title}</h3>
            <p>{note.description}</p>
          </Card>
        ))}
      </Grid>
    </PageShell>
  )
}

export default DevNotesPage