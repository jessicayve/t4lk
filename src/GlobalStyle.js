import styled,{ createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif; 
}
#root{
    display: flex;
    justify-content: center;
}

`

export const AppContainer = styled.div`
width: 600px;
height: 100vh;

`