import styled from "styled-components"

export const ChatHeaderContainer = styled.header`
  min-height: 88px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);

  @media (max-width: 560px) {
    min-height: 76px;
    padding: 14px 16px;
  }
`

export const MobileContactsButton = styled.button`
  display: none;

  @media (max-width: 860px) {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.05);
    color: #e2e8f0;
    border-radius: 14px;
    transition: 0.2s;

    &:hover {
      background: rgba(255,255,255,0.1);
    }
  }
`

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;

  img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  h2 {
    font-size: 18px;
    color: #f8fafc;
    line-height: 1.2;
  }

  p {
    font-size: 13px;
    color: #94a3b8;
    margin-top: 4px;
  }

  @media (max-width: 560px) {
    gap: 10px;

    img {
      width: 44px;
      height: 44px;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 560px) {
    gap: 8px;
  }
`

export const HeaderButton = styled.button`
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  color: #e2e8f0;
  padding: 10px 14px;
  border-radius: 12px;
  transition: 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  @media (max-width: 560px) {
    padding: 9px 12px;
    font-size: 13px;
  }

  @media (max-width: 420px) {
    padding: 8px 10px;
    font-size: 12px;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`