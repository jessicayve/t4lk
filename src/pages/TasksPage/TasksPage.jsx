import React from "react"
import {
  PageShell,
  HeroCard,
  SectionTitle,
  BoardGrid,
  BoardColumn,
  BoardCard,
  MetaRow,
  Badge
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const columns = [
  {
    title: "Backlog",
    variant: "backlog",
    tasks: [
      {
        title: "Create release checklist",
        description: "Prepare a reusable checklist for pre-release verification.",
        meta: ["Docs", "Low"]
      },
      {
        title: "Improve notification system",
        description: "Define better message grouping and priority alerts.",
        meta: ["UX", "Medium"]
      }
    ]
  },
  {
    title: "In Progress",
    variant: "progress",
    tasks: [
      {
        title: "Build dashboard overview cards",
        description: "Implement stat blocks and activity feed layout.",
        meta: ["Frontend", "High"]
      },
      {
        title: "Create shared page shell",
        description: "Standardize spacing, grid and workspace page wrappers.",
        meta: ["Architecture", "High"]
      }
    ]
  },
  {
    title: "Code Review",
    variant: "review",
    tasks: [
      {
        title: "Refactor navigation sidebar",
        description: "Review accessibility, active states and mobile stacking.",
        meta: ["Review", "Medium"]
      }
    ]
  },
  {
    title: "Done",
    variant: "done",
    tasks: [
      {
        title: "Keep existing Team Chat stable",
        description: "Messaging flow remains untouched and working as expected.",
        meta: ["Chat", "Completed"]
      }
    ]
  }
]

const TasksPage = () => {
  return (
    <PageShell>
      <HeroCard>
        <h1>Sprint / Tasks Board</h1>
        <p>
          Organize work in a clean kanban workflow for planning, execution,
          review and completion.
        </p>
      </HeroCard>

      <SectionTitle>
        <h2>Current sprint board</h2>
        <p>Track tasks across the full development flow.</p>
      </SectionTitle>

      <BoardGrid>
        {columns.map((column) => (
          <BoardColumn key={column.title} variant={column.variant}>
            <h3>{column.title}</h3>

            {column.tasks.map((task) => (
              <BoardCard key={task.title}>
                <strong>{task.title}</strong>
                <p>{task.description}</p>

                <MetaRow>
                  {task.meta.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </MetaRow>
              </BoardCard>
            ))}
          </BoardColumn>
        ))}
      </BoardGrid>
    </PageShell>
  )
}

export default TasksPage