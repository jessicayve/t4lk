import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,body,#root{
    min-height:100%;
  }

  body{
    font-family:'Manrope', sans-serif;

    background:
      radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 28%),
      radial-gradient(circle at bottom right, rgba(16,185,129,0.16), transparent 26%),
      linear-gradient(135deg,#0b1020 0%,#121a2f 45%,#0f172a 100%);

    color:#e5e7eb;
  }

  button,input{
    font:inherit;
  }

  button{
    cursor:pointer;
  }

  img{
    display:block;
    max-width:100%;
  }

  #root{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:24px;
  }

`

export const AppContainer = styled.div`
  width:100%;
  max-width:1320px;
  min-height:92vh;

  display:grid;
  grid-template-columns:320px 1fr 280px;

  background:rgba(15,23,42,0.85);

  border-radius:28px;

  overflow:hidden;

  box-shadow:0 20px 60px rgba(0,0,0,0.35);

  @media(max-width:1100px){
    grid-template-columns:280px 1fr;
  }

  @media(max-width:860px){
    grid-template-columns:1fr;
    border-radius:0;
  }
`

export const ChatSection = styled.section`
  display:flex;
  flex-direction:column;
  min-height:100%;
`