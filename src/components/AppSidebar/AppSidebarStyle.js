import styled from "styled-components"

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 24px 18px 28px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.18);

  @media (max-width: 980px) {
    border-right: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: none;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    padding-top: 22px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 6px;

  h1 {
    font-size: 20px;
    color: #f8fafc;
    margin-bottom: 2px;
  }

  p {
    font-size: 13px;
    color: #94a3b8;
    line-height: 1.4;
  }
`

export const BrandBadge = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #6366f1, #22c55e);
  box-shadow: 0 12px 24px rgba(34, 197, 94, 0.18);
  flex-shrink: 0;
`

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const NavItem = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 14px;
    border-radius: 16px;
    color: #cbd5e1;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid transparent;
    transition: 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #f8fafc;
      border-color: rgba(255, 255, 255, 0.08);
      transform: translateX(2px);
    }

    &.active {
      color: #ffffff;
      background: linear-gradient(
        135deg,
        rgba(99, 102, 241, 0.28),
        rgba(34, 197, 94, 0.2)
      );
      border-color: rgba(255, 255, 255, 0.12);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
    }
  }
`

export const NavIcon = styled.span`
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const FooterCard = styled.div`
  margin-top: auto;
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);

  strong {
    display: block;
    color: #f8fafc;
    margin-bottom: 8px;
    font-size: 14px;
  }

  p {
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.6;
  }
`