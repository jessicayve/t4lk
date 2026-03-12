import styled from "styled-components"

export const WorkspaceContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(99, 102, 241, 0.18), transparent 24%),
    radial-gradient(circle at top right, rgba(34, 197, 94, 0.12), transparent 22%),
    linear-gradient(180deg, #0f172a, #020617);
`

export const DesktopSidebarSlot = styled.div`
  width: 280px;
  min-width: 280px;
  height: 100vh;
  flex-shrink: 0;

  @media (max-width: 980px) {
    display: none;
  }
`

export const SidebarOverlay = styled.button`
  display: none;

  @media (max-width: 980px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 1090;
    border: none;
    background: rgba(2, 6, 23, 0.58);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`

export const SidebarMobileWrapper = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1100;
    width: min(86vw, 320px);
    height: 100dvh;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-105%)"};
    transition: transform 0.28s ease;
    box-shadow: 16px 0 40px rgba(0, 0, 0, 0.38);
  }
`

export const WorkspaceContent = styled.main`
  flex: 1;
  min-width: 0;
  min-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px;

  @media (max-width: 980px) {
    min-height: 100dvh;
    height: 100dvh;
    padding: 16px;
    padding-top: 84px;
  }

  @media (max-width: 640px) {
    padding: 14px;
    padding-top: 82px;
  }
`

export const MobileTopbar = styled.div`
  display: none;

  @media (max-width: 980px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1080;
    height: 68px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    background: rgba(2, 6, 23, 0.78);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`

export const MobileMenuButton = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  color: #f8fafc;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`

export const MobileTopbarTitle = styled.div`
  color: #f8fafc;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.08em;
`