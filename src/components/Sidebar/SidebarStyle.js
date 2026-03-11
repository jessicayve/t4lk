import styled from "styled-components"

export const SidebarContainer = styled.aside`

  background:rgba(255,255,255,0.06);

  backdrop-filter:blur(22px);
  -webkit-backdrop-filter:blur(22px);

  border-right:1px solid rgba(255,255,255,0.08);

  padding:24px 18px;

  display:flex;
  flex-direction:column;
  gap:18px;

  box-shadow:8px 0 30px rgba(0,0,0,0.2);

  @media(max-width:860px){
    display:none;
  }

`

export const SidebarTop = styled.div`
  display:flex;
  flex-direction:column;
  gap:18px;
`

export const Brand = styled.div`

  display:flex;
  flex-direction:column;
  gap:4px;

  span{
    font-size:28px;
    font-weight:800;
    letter-spacing:0.08em;
    color:#f8fafc;
  }

  small{
    color:#94a3b8;
    font-size:13px;
  }

`

export const ProfileCard = styled.div`

  display:flex;
  align-items:center;
  gap:12px;

  padding:14px;

  border-radius:20px;

  background:rgba(255,255,255,0.05);

  border:1px solid rgba(255,255,255,0.06);

  img{
    width:52px;
    height:52px;
    border-radius:50%;
    object-fit:cover;
  }

  h3{
    font-size:16px;
    color:#f8fafc;
  }

  p{
    font-size:13px;
    color:#94a3b8;
  }

`

export const SearchInput = styled.input`

  width:100%;
  height:48px;

  border-radius:16px;

  border:1px solid rgba(255,255,255,0.08);

  background:rgba(15,23,42,0.6);

  color:#e2e8f0;

  padding:0 16px;

  outline:none;

  backdrop-filter:blur(10px);

  &::placeholder{
    color:#64748b;
  }

`

export const SidebarTitle = styled.h4`
  font-size:13px;
  font-weight:700;
  letter-spacing:0.05em;
  text-transform:uppercase;
  color:#94a3b8;
`

export const ContactList = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`

export const ContactCard = styled.button`

  width:100%;

  display:flex;
  align-items:flex-start;

  gap:12px;

  padding:12px;

  border-radius:18px;

  border:1px solid rgba(255,255,255,0.05);

  background:${props =>
    props.isActive
      ? "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(16,185,129,0.2))"
      : "rgba(255,255,255,0.04)"};

  transition:all 0.2s;

  &:hover{
    transform:translateY(-2px);
    background:rgba(255,255,255,0.08);
  }

  img{
    width:46px;
    height:46px;
    border-radius:50%;
  }

`

export const ContactMeta = styled.div`

  flex:1;

  strong{
    display:block;
    font-size:15px;
    color:#f8fafc;
  }

  span{
    font-size:12px;
    color:#94a3b8;
  }

`

export const LastMessage = styled.p`

  margin-top:6px;

  font-size:12px;

  color:#cbd5e1;

  opacity:0.85;

`

export const StatusDot = styled.div`

  width:10px;
  height:10px;

  border-radius:50%;

  margin-top:8px;

  background:${props=>{
    if(props.status==="Online") return "#22c55e"
    if(props.status==="Away") return "#f59e0b"
    return "#64748b"
  }}

`