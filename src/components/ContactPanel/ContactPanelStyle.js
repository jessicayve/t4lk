import styled from "styled-components"

export const ContactPanelContainer = styled.aside`

  padding:24px 18px;

  background:rgba(255,255,255,0.05);

  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);

  border-left:1px solid rgba(255,255,255,0.08);

  display:flex;
  flex-direction:column;
  align-items:center;

  text-align:center;

  gap:14px;

  box-shadow:-8px 0 30px rgba(0,0,0,0.18);

  h3{
    font-size:20px;
    color:#f8fafc;
  }

  p{
    font-size:14px;
    color:#94a3b8;
  }

  @media(max-width:1100px){
    display:none;
  }

`

export const Avatar = styled.img`

  width:110px;
  height:110px;

  border-radius:28px;

  object-fit:cover;

`

export const Section = styled.div`

  width:100%;

  padding:14px;

  border-radius:18px;

  background:rgba(255,255,255,0.05);

  border:1px solid rgba(255,255,255,0.06);

  display:flex;
  flex-direction:column;
  gap:6px;

  text-align:left;

  strong{
    font-size:13px;
    color:#f8fafc;
  }

  span{
    font-size:13px;
    color:#94a3b8;
  }

`

export const AboutText = styled.p`

  font-size:13px;

  color:#94a3b8;

  line-height:1.6;

`

export const TagList = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:8px;
`

export const Tag = styled.span`

  padding:7px 10px;

  border-radius:999px;

  font-size:12px;

  background:rgba(99,102,241,0.2);

  color:#c7d2fe;

`