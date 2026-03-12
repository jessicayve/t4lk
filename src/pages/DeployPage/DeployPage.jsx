import React from "react"
import {
  PageShell,
  HeroCard,
  Grid,
  Card,
  StatValue,
  Badge
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const DeployPage = () => {
  return (
    <PageShell>
      <HeroCard>
        <h1>Deploy Status</h1>
        <p>
          Monitor build outcomes, CI results and environment readiness in one place.
        </p>
      </HeroCard>

      <Grid>
        <Card>
          <Badge>Latest Build</Badge>
          <StatValue style={{ fontSize: "28px", marginTop: "12px" }}>#248</StatValue>
          <p>Last successful build completed from the workspace navigation branch.</p>
        </Card>

        <Card>
          <Badge>CI Status</Badge>
          <StatValue style={{ fontSize: "28px", marginTop: "12px" }}>Passing</StatValue>
          <p>Checks completed successfully for linting, tests and build validation.</p>
        </Card>

        <Card>
          <Badge>Staging</Badge>
          <StatValue style={{ fontSize: "28px", marginTop: "12px" }}>Live</StatValue>
          <p>Staging is available for QA and design review.</p>
        </Card>

        <Card>
          <Badge>Production</Badge>
          <StatValue style={{ fontSize: "28px", marginTop: "12px" }}>Healthy</StatValue>
          <p>Production environment is stable with no active incident flags.</p>
        </Card>
      </Grid>
    </PageShell>
  )
}

export default DeployPage