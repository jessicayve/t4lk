import styled from "styled-components"

export const ChatHeaderContainer = styled.header`

  min-height:88px;

  padding:20px 24px;

  display:flex;

  align-items:center;

  justify-content:space-between;

  background:rgba(255,255,255,0.04);

  backdrop-filter:blur(12px);

  border-bottom:1px solid rgba(255,255,255,0.06);

`

export const ContactInfo = styled.div`

  display:flex;

  align-items:center;

  gap:14px;

  img{
    width:52px;
    height:52px;
    border-radius:50%;
  }

  h2{
    font-size:18px;
    color:#f8fafc;
  }

  p{
    font-size:13px;
    color:#94a3b8;
  }

`

export const HeaderActions = styled.div`
  display:flex;
  gap:10px;
`

export const HeaderButton = styled.button`

  border:1px solid rgba(255,255,255,0.08);

  background:rgba(255,255,255,0.05);

  color:#e2e8f0;

  padding:10px 14px;

  border-radius:12px;

  transition:0.2s;

  &:hover{
    background:rgba(255,255,255,0.1);
  }

`