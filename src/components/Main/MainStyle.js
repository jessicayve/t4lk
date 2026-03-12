import styled from "styled-components"

export const MainContainer = styled.main`
  flex: 1;
  min-height: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  background:
    radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 30%);

  @media (max-width: 560px) {
    padding: 18px 16px;
  }
`

export const DateDivider = styled.div`
  align-self: center;
  top: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 700;
  padding: 7px 14px;
  border-radius: 999px;
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.sender === "Me" ? "flex-end" : "flex-start"};
`

export const ChatBalloon = styled.div`
  min-width: 110px;
  max-width: 400px;
  border-radius: 20px;
  padding: 14px 14px 12px;
  color: ${(props) => (props.sender === "Me" ? "#f8fafc" : "#e5e7eb")};
  background: ${(props) =>
    props.sender === "Me"
      ? "linear-gradient(135deg, #6366f1, #22c55e)"
      : "rgba(255, 255, 255, 0.06)"};
  border: 1px solid
    ${(props) =>
      props.sender === "Me"
        ? "rgba(255,255,255,0.12)"
        : "rgba(255,255,255,0.06)"};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);

  h1 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    word-break: break-word;
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    span {
      color: rgba(255, 255, 255, 0.75);
      font-size: 12px;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }
`

export const EmptyState = styled.div`
  align-self: center;
  margin-top: 20px;
  padding: 24px;
  width: 100%;
  max-width: 420px;
  text-align: center;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);

  h3 {
    color: #f8fafc;
    margin-bottom: 8px;
  }

  p {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.5;
  }
`