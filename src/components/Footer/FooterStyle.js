import styled from "styled-components"

export const FooterContainer = styled.footer`

  display:flex;
  align-items:center;
  justify-content:space-between;

  gap:12px;

  padding:16px 20px;

  border-top:1px solid rgba(255,255,255,0.06);

  background:rgba(255,255,255,0.04);
  backdrop-filter:blur(12px);

`

export const InputArea = styled.div`

  flex:1;

  display:flex;
  align-items:center;

  gap:8px;

`

export const MessageInput = styled.input`

  flex:1;

  height:42px;

  border-radius:12px;

  border:1px solid rgba(255,255,255,0.08);

  background:rgba(15,23,42,0.6);

  color:#e2e8f0;

  padding:0 14px;

  outline:none;

  &::placeholder{
    color:#64748b;
  }

`

export const IconButton = styled.button`

  width:42px;
  height:42px;

  display:flex;
  align-items:center;
  justify-content:center;

  border:1px solid rgba(255,255,255,0.08);

  background:rgba(255,255,255,0.05);

  color:#e2e8f0;

  border-radius:12px;

  transition:0.2s;

  &:hover{
    background:rgba(255,255,255,0.1);
  }

`

export const SendButton = styled.button`

  width:44px;
  height:44px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:14px;

  border:none;

  background:linear-gradient(135deg,#6366f1,#22c55e);

  color:white;

  transition:0.2s;

  &:hover{
    transform:translateY(-1px);
  }

`