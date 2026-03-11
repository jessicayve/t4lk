import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background-color: white;
  border-bottom: 1px solid #e7eaee;

  .sender-profile {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    div {
      margin-left: 10px;
    }
  }

  .action-menu {
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      border-radius: 50%;
      width: 38px;
      height: 38px;
      border: none;
      background-color: #f5f7fa;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.97);
      }

      &:active {
        transform: scale(0.96);
      }
    }
  }
`

export const Select = styled.select`
  border: none;
  font-size: 16px;
  font-weight: 700;
  background: transparent;
  outline: none;
`

export const Status = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #7d8790;
  margin-top: 2px;
`