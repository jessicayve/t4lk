import React from "react"
import {
  PageShell,
  HeroCard,
  Grid,
  Card,
  List,
  ListItem,
  Badge
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const PullRequestsPage = () => {
  return (
    <PageShell>
      <HeroCard>
        <h1>Pull Requests</h1>
        <p>
          Centralize review flow, approvals and open merge work for the team.
        </p>
      </HeroCard>

      <Grid columns="repeat(3, minmax(240px, 1fr))">
        <Card>
          <Badge>Open PRs</Badge>
          <List style={{ marginTop: "16px" }}>
            <ListItem>
              <strong>PR #142 — Workspace routing structure</strong>
              <span>Author: Lester</span>
            </ListItem>
            <ListItem>
              <strong>PR #145 — Home page hero section</strong>
              <span>Author: Rebeca</span>
            </ListItem>
          </List>
        </Card>

        <Card>
          <Badge>Waiting for Review</Badge>
          <List style={{ marginTop: "16px" }}>
            <ListItem>
              <strong>PR #146 — Dashboard activity cards</strong>
              <span>Needs two reviewers before merge.</span>
            </ListItem>
            <ListItem>
              <strong>PR #147 — Tasks board interactions</strong>
              <span>Awaiting UI and accessibility review.</span>
            </ListItem>
          </List>
        </Card>

        <Card>
          <Badge>Approved</Badge>
          <List style={{ marginTop: "16px" }}>
            <ListItem>
              <strong>PR #139 — Chat persistence refinement</strong>
              <span>Approved and ready for final merge.</span>
            </ListItem>
            <ListItem>
              <strong>PR #141 — Sidebar visual polish</strong>
              <span>Approved after design feedback round.</span>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </PageShell>
  )
}

export default PullRequestsPage