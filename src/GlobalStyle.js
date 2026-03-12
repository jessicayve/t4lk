import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,body,#root{
    width:100%;
    height:100%;
    min-height:100%;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    font-family:'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background:
      radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 28%),
      radial-gradient(circle at bottom right, rgba(16,185,129,0.16), transparent 26%),
      linear-gradient(135deg,#0b1020 0%,#121a2f 45%,#0f172a 100%);
    color:#e5e7eb;
    overflow:hidden;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  body,
  button,
  input,
  textarea,
  select,
  option,
  a,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  small,
  strong,
  label,
  li{
    font-family:'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  button,input,textarea,select{
    font:inherit;
  }

  button{
    cursor:pointer;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  ul,ol{
    list-style:none;
  }

  h1,h2,h3,h4{
    font-weight:600;
    letter-spacing:-0.02em;
  }

  p{
    font-weight:400;
    letter-spacing:-0.01em;
  }

  img{
    display:block;
    max-width:100%;
  }

  ::selection{
    background:rgba(99,102,241,0.28);
    color:white;
  }

  #root{
    width:100%;
    height:100vh;
    min-height:100vh;
    overflow:hidden;
  }

  ::-webkit-scrollbar{
    width:10px;
  }

  ::-webkit-scrollbar-track{
    background:rgba(255,255,255,0.04);
  }

  ::-webkit-scrollbar-thumb{
    background:rgba(148,163,184,0.35);
    border-radius:999px;
  }

  ::-webkit-scrollbar-thumb:hover{
    background:rgba(148,163,184,0.5);
  }
`

export const AppContainer = styled.div`
  width:100%;
  height:100vh;
  min-height:100vh;
  display:grid;
  grid-template-columns:320px minmax(0,1fr) 280px;
  background:rgba(15,23,42,0.85);
  overflow-y:auto;
  overflow-x:hidden;
  box-shadow:0 20px 60px rgba(0,0,0,0.35);
  border:1px solid rgba(255,255,255,0.06);

  @media(max-width:1100px){
    grid-template-columns:280px minmax(0,1fr);
  }

  @media(max-width:860px){
    grid-template-columns:1fr;
  }
`

export const ChatSection = styled.section`
  min-width:0;
  min-height:0;
  height:100vh;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:
    radial-gradient(circle at top, rgba(255,255,255,0.03), transparent 30%);
`