import React from "react"
import {
  PageShell,
  HeroCard,
  SectionTitle,
  Grid,
  Card,
  StatValue,
  List,
  ListItem,
  ActionGrid,
  ActionButton,
  Badge
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const DashboardPage = () => {
  return (
    <PageShell>
      <HeroCard>
        <h1>Team Dashboard</h1>
        <p>
          A high-level summary of the team workspace, including active members,
          daily focus points, recent events and quick access to common actions.
        </p>
      </HeroCard>

      <Grid>
        <Card>
          <StatValue>6</StatValue>
          <h3>Members Online</h3>
          <p>Most of the team is currently active across chat, review and planning.</p>
        </Card>

        <Card>
          <StatValue>12</StatValue>
          <h3>Recent Activities</h3>
          <p>New comments, task updates, note edits and PR changes in the last few hours.</p>
        </Card>

        <Card>
          <StatValue>4</StatValue>
          <h3>Today’s Priorities</h3>
          <p>Key work items are focused on release preparation and interface improvements.</p>
        </Card>

        <Card>
          <StatValue>3</StatValue>
          <h3>Pending Reviews</h3>
          <p>Three pull requests are waiting for code review before merge decisions.</p>
        </Card>
      </Grid>

      <Grid columns="1.3fr 1fr">
        <Card>
          <SectionTitle>
            <h2>Recent activity</h2>
            <p>Important updates from the workspace.</p>
          </SectionTitle>

          <List>
            <ListItem>
              <strong>PR #142 updated by Lester</strong>
              <span>Refined dashboard card spacing and improved loading states.</span>
            </ListItem>

            <ListItem>
              <strong>Standup posted by Rebeca</strong>
              <span>Shared UI animation progress and flagged one blocker for review.</span>
            </ListItem>

            <ListItem>
              <strong>Deploy completed to staging</strong>
              <span>Build passed CI and is now available for QA validation.</span>
            </ListItem>
          </List>
        </Card>

        <Card>
          <SectionTitle>
            <h2>Quick actions</h2>
            <p>Fast entry points for everyday collaboration tasks.</p>
          </SectionTitle>

          <ActionGrid>
            <ActionButton>Open Team Chat</ActionButton>
            <ActionButton>Create Task</ActionButton>
            <ActionButton>Review PRs</ActionButton>
            <ActionButton>Write Standup</ActionButton>
          </ActionGrid>
        </Card>
      </Grid>

      <Grid>
        <Card>
          <Badge>Today</Badge>
          <h3 style={{ marginTop: "14px" }}>Priority focus</h3>
          <p>Finish task board interactions, review pending UI issues and validate staging release.</p>
        </Card>

        <Card>
          <Badge>Release</Badge>
          <h3 style={{ marginTop: "14px" }}>Latest milestone</h3>
          <p>T4LK workspace structure is now ready for feature-by-feature expansion.</p>
        </Card>
      </Grid>
    </PageShell>
  )
}

export default DashboardPage