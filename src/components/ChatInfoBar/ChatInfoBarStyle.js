import styled from "styled-components"

export const ChatInfoBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 560px) {
    padding: 12px 16px;
  }
`

export const InfoItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  color: #cbd5e1;

  strong {
    color: #f8fafc;
  }
`