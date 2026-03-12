import styled from "styled-components"

export const PageShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  min-width: 0;
`

export const HeroCard = styled.section`
  padding: 28px;
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(99, 102, 241, 0.18), rgba(34, 197, 94, 0.12)),
    rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);

  h1 {
    color: #f8fafc;
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    max-width: 760px;
    color: #cbd5e1;
    line-height: 1.7;
    font-size: 15px;
  }

  @media (max-width: 640px) {
    padding: 20px;
    border-radius: 22px;

    h1 {
      font-size: 24px;
      line-height: 1.2;
    }

    p {
      font-size: 14px;
      line-height: 1.6;
    }
  }
`

export const SectionTitle = styled.div`
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-bottom:18px;

  h2{
    color:#f8fafc;
    font-size:22px;
  }

  p{
    color:#94a3b8;
    font-size:14px;
    line-height:1.6;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns || "repeat(auto-fit, minmax(240px, 1fr))"};
  gap: 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`

export const Card = styled.div`
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
  min-width: 0;

  h3 {
    color: #f8fafc;
    font-size: 18px;
    margin-bottom: 8px;
    line-height: 1.35;
  }

  p {
    color: #94a3b8;
    line-height: 1.6;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    padding: 16px;
    border-radius: 20px;

    h3 {
      font-size: 17px;
    }

    p {
      font-size: 13px;
    }
  }
`

export const StatValue = styled.strong`
  display: block;
  font-size: 34px;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ListItem = styled.div`
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  min-width: 0;

  strong {
    display: block;
    color: #f8fafc;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.5;
  }

  span,
  p {
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    padding: 12px 14px;
    border-radius: 16px;

    strong {
      font-size: 13px;
    }

    span,
    p {
      font-size: 12px;
    }
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 11px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.08);
`

export const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

export const ActionButton = styled.button`
  min-height: 58px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  color: #f8fafc;
  font-weight: 700;
  transition: 0.2s ease;
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    min-height: 50px;
    border-radius: 16px;
    font-size: 14px;
  }
`

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 18px;
  width: 100%;
  min-width: 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const BoardColumn = styled.div`
  padding: 18px;
  border-radius: 26px;
  min-height: 380px;
  min-width: 0;
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.08),
    0 18px 32px rgba(0,0,0,0.22);

  background: ${({ variant }) => {
    if (variant === "backlog") {
      return "linear-gradient(180deg, rgba(239,68,68,0.20), rgba(127,29,29,0.14))"
    }

    if (variant === "progress") {
      return "linear-gradient(180deg, rgba(250,204,21,0.18), rgba(161,98,7,0.14))"
    }

    if (variant === "review") {
      return "linear-gradient(180deg, rgba(249,115,22,0.18), rgba(154,52,18,0.14))"
    }

    if (variant === "done") {
      return "linear-gradient(180deg, rgba(34,197,94,0.18), rgba(20,83,45,0.14))"
    }

    return "rgba(255,255,255,0.05)"
  }};

  h3 {
    color: #f8fafc;
    font-size: 17px;
    margin-bottom: 14px;
    display: inline-block;
    padding-bottom: 6px;
    position: relative;
    line-height: 1.3;
  }

  h3::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: rgba(255,255,255,0.6);
  }

  @media (max-width: 640px) {
    padding: 14px;
    border-radius: 20px;
    min-height: unset;
  }
`

export const BoardCard = styled.div`
  padding: 14px;
  border-radius: 20px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 14px 24px rgba(0, 0, 0, 0.18);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.08),
      0 18px 28px rgba(0, 0, 0, 0.22);
  }

  strong {
    display: block;
    color: #f8fafc;
    font-size: 14px;
    margin-bottom: 8px;
  }

  p {
    color: #dbe4f0;
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 10px;
  }
`
export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`
