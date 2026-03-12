import styled from "styled-components"
import { Link } from "react-router-dom"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  min-width: 0;

  @media (max-width: 640px) {
    gap: 18px;
  }
`

export const HeroSection = styled.section`
  border-radius: 32px;
  padding: 30px;
  background:
    radial-gradient(circle at top left, rgba(99, 102, 241, 0.22), transparent 28%),
    radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.14), transparent 24%),
    rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 20px 40px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);

  @media (max-width: 720px) {
    padding: 22px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 22px;
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    gap: 18px;
  }
`

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
`

export const HeroRight = styled.div`
  display: flex;
  align-items: stretch;
  min-width: 0;
`

export const HeroEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  padding: 8px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  color: #dbeafe;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 480px) {
    margin-bottom: 14px;
    font-size: 11px;
  }
`

export const HeroTitle = styled.h1`
  max-width: 720px;
  color: #f8fafc;
  font-size: 40px;
  line-height: 1.08;
  letter-spacing: -0.04em;
  margin-bottom: 16px;

  @media (max-width: 720px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.16;
    margin-bottom: 12px;
  }
`

export const HeroText = styled.p`
  max-width: 700px;
  color: #cbd5e1;
  font-size: 15px;
  line-height: 1.8;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.7;
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 480px) {
    margin-top: 18px;
    gap: 10px;
  }
`

const ActionBase = styled(Link)`
  min-height: 50px;
  padding: 0 18px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: 0.2s ease;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    min-height: 48px;
    padding: 0 14px;
  }
`

export const PrimaryAction = styled(ActionBase)`
  color: #ffffff;
  background: linear-gradient(135deg, #6366f1, #22c55e);
  box-shadow: 0 16px 26px rgba(34, 197, 94, 0.16);

  &:hover {
    transform: translateY(-2px);
  }
`

export const SecondaryAction = styled(ActionBase)`
  color: #e5e7eb;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.09);
  }
`

export const ActivityCard = styled.div`
  width: 100%;
  min-width: 0;
  padding: 22px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04)),
    rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 18px 34px rgba(0,0,0,0.18);

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 22px;
  }
`

export const ActivityHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;

  span {
    display: inline-block;
    color: #93c5fd;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  h3 {
    color: #f8fafc;
    font-size: 22px;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 16px;

    h3 {
      font-size: 19px;
    }
  }
`

export const ActivityKpi = styled.div`
  text-align: right;

  strong {
    display: block;
    color: #ffffff;
    font-size: 32px;
    line-height: 1;
    margin-bottom: 6px;
    letter-spacing: -0.04em;
  }

  small {
    color: #94a3b8;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    text-align: left;

    strong {
      font-size: 28px;
    }
  }
`

export const ActivityChart = styled.div`
  height: 220px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  padding-top: 10px;

  @media (max-width: 480px) {
    height: 180px;
    gap: 8px;
  }
`

export const ActivityColumn = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`

export const ActivityBar = styled.div`
  width: 100%;
  max-width: 34px;
  min-height: 16px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(99,102,241,0.98), rgba(34,197,94,0.92));
  box-shadow:
    0 10px 20px rgba(34,197,94,0.14),
    inset 0 1px 0 rgba(255,255,255,0.2);

  @media (max-width: 480px) {
    max-width: 24px;
  }
`

export const ActivityLabel = styled.span`
  color: #94a3b8;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`

export const ActivityLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 16px;

  span {
    color: #cbd5e1;
    font-size: 12px;
    position: relative;
    padding-left: 14px;
  }

  span::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 7px;
    height: 7px;
    border-radius: 999px;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #6366f1, #22c55e);
  }

  @media (max-width: 480px) {
    gap: 10px;

    span {
      font-size: 11px;
    }
  }
`

export const SectionCard = styled.section`
  padding: 24px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.04),
    0 16px 30px rgba(0, 0, 0, 0.16);

  @media (max-width: 720px) {
    padding: 20px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 20px;
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 18px;

  h2 {
    color: #f8fafc;
    font-size: 24px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  p {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    max-width: 760px;
  }

  @media (max-width: 480px) {
    margin-bottom: 14px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
      line-height: 1.6;
    }
  }
`

export const FeedwallList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const FeedwallItem = styled.div`
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);

  p {
    color: #dbe4f0;
    font-size: 15px;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 18px;

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }
`

export const FeedwallMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding: 0 10px;
    border-radius: 999px;
    color: #dbeafe;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: rgba(99,102,241,0.14);
    border: 1px solid rgba(255,255,255,0.08);
  }

  strong {
    color: #f8fafc;
    font-size: 14px;
  }

  small {
    color: #94a3b8;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 8px;
  }
`

export const ProgressLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 18px;
  align-items: start;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    gap: 16px;
  }
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 901px) and (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const TeamMemberCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);
  min-width: 0;

  @media (max-width: 480px) {
    padding: 14px;
    gap: 12px;
    border-radius: 18px;
  }
`

export const TeamMemberAvatar = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 12px 22px rgba(0,0,0,0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 58px;
    height: 58px;
    border-radius: 18px;
  }
`

export const StatusDot = styled.span`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  border: 2px solid #0f172a;
  background: ${({ status }) => {
    if (status === "online") return "#22c55e"
    if (status === "focus") return "#38bdf8"
    return "#64748b"
  }};

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`

export const TeamMemberInfo = styled.div`
  min-width: 0;

  strong {
    display: block;
    color: #f8fafc;
    font-size: 16px;
    margin-bottom: 4px;
  }

  span {
    display: block;
    color: #cbd5e1;
    font-size: 13px;
    margin-bottom: 8px;
  }

  p {
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    strong {
      font-size: 15px;
    }

    span,
    p {
      font-size: 12px;
    }
  }
`

export const DayImageCard = styled.div`
  padding: 20px;
  border-radius: 24px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);

  span {
    display: inline-block;
    color: #93c5fd;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  h3 {
    color: #f8fafc;
    font-size: 22px;
    margin-bottom: 10px;
    letter-spacing: -0.03em;
  }

  p {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 18px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 20px;

    h3 {
      font-size: 19px;
    }

    p {
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 14px;
    }
  }
`

export const DayImageFrame = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);

  img{
    width:100%;
    height:320px;
    object-fit:cover;
    display:block;
    transition: transform 0.6s ease;
  }

  &:hover img{
    transform: scale(1.05);
  }

  &::after{
    content:"";
    position:absolute;
    inset:0;
    background:
      linear-gradient(
        to top,
        rgba(15,23,42,0.8),
        rgba(15,23,42,0.2),
        transparent
      );
    pointer-events:none;
  }

  @media (max-width: 480px) {
    min-height: 240px;
    border-radius: 18px;

    img {
      height: 240px;
    }
  }
`

export const ProgressCard = styled.div`
  padding: 20px;
  border-radius: 24px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 20px;
  }
`

export const ProgressTop = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;

  span {
    color: #93c5fd;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h3 {
    color: #f8fafc;
    font-size: 24px;
    margin-top: 8px;
    letter-spacing: -0.03em;
  }

  strong {
    color: #ffffff;
    font-size: 38px;
    letter-spacing: -0.04em;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: 20px;
    }

    strong {
      font-size: 30px;
    }
  }
`

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255,255,255,0.08);
  margin-bottom: 20px;

  @media (max-width: 480px) {
    height: 14px;
    margin-bottom: 16px;
  }
`

export const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #6366f1, #22c55e);
`

export const ProgressMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  div {
    padding: 14px;
    border-radius: 18px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    min-width: 0;
  }

  strong {
    display: block;
    color: #ffffff;
    font-size: 24px;
    margin-bottom: 6px;
  }

  span {
    color: #94a3b8;
    font-size: 13px;
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    strong {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }
`

export const ShortcutPanel = styled.div`
  padding: 18px;
  border-radius: 28px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.04),
    0 16px 30px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 20px;
  }
`

export const ShortcutLink = styled(Link)`
  min-height: 56px;
  padding: 0 16px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  color: #f8fafc;
  font-weight: 700;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  transition: 0.2s ease;

  &:hover {
    transform: translateX(4px);
    background: rgba(255,255,255,0.08);
  }

  @media (max-width: 480px) {
    min-height: 50px;
    border-radius: 16px;
    font-size: 14px;
  }
`

export const HealthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const HealthItem = styled.div`
  padding: 20px;
  border-radius: 22px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  span {
    color: #94a3b8;
    font-size: 13px;
  }

  strong {
    color: #f8fafc;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.02em;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 18px;

    strong {
      font-size: 18px;
    }
  }
`

export const HealthDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  background: ${({ tone }) => {
    if (tone === "success") return "#22c55e"
    if (tone === "warning") return "#f59e0b"
    if (tone === "danger") return "#ef4444"
    if (tone === "info") return "#38bdf8"
    return "#64748b"
  }};
`