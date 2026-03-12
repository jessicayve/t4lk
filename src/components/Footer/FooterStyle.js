import styled from "styled-components"

export const FooterContainer = styled.footer`
  flex-shrink: 0;
  padding: 18px 24px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  gap: 12px;
  align-items: center;

  .input-area {
    flex: 1;
    height: 58px;
    border-radius: 18px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    padding: 0 14px;

    input {
      flex: 1;
      height: 100%;
      border: none;
      background: transparent;
      outline: none;
      color: #e2e8f0;
      margin: 0 10px;

      &::placeholder {
        color: #64748b;
      }
    }
  }

  button {
    border: none;
  }

  .emoji,
  .paperclip {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: transparent;
  }

  @media (max-width: 560px) {
    padding: 16px;
    flex-direction: column;
    align-items: stretch;
  }
`

export const SendButton = styled.button`
  min-width: 110px;
  height: 50px;
  border-radius: 18px;
  background: linear-gradient(135deg, #6366f1, #22c55e);
  color: white;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.18);
  transition: 0.2s;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`