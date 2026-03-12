import styled from "styled-components"

export const WorkspaceContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background:
    radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 24%),
    radial-gradient(circle at top right, rgba(34, 197, 94, 0.12), transparent 22%),
    linear-gradient(180deg, #0f172a, #020617);

  @media (max-width: 980px) {
    flex-direction: column;
  }
`

export const WorkspaceContent = styled.main`
  flex:1;
  min-width:0;
  height:100vh;
  overflow-y:auto;
  overflow-x:hidden;

  display:flex;
  flex-direction:column;

  padding:24px;
`