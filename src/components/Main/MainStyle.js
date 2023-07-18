import styled from "styled-components";

export const MainContainer = styled.div`
flex-grow: 1;
background-color: #f1f4f7;
padding: 16px;
>div{
   display: flex;
   flex-direction: column;
}
`

export const ChatBalloon = styled.div`
     min-width: 85px;
     max-width: 310px;
     border-radius: 10px;
     padding: 8px;
     margin-bottom: 16px;
    

     margin: ${(props)=> props.sender === "Me" ? "0 0 16px auto": "0 auto 16px 0"};

     color: ${(props)=> props.sender === "Me" ? "white": "black"};

     background-color: ${(props)=> props.sender === "Me" ? "#61C554": "#EBECEF"} ;
    h1{
        font-size: 16px;
        font-weight: 600;
    }
    p{
        
        font-size: 16px;
        margin-top: 4px;
        overflow-wrap: break-word;
    }
    div{
        text-align: right;
        span{
        color:#727272;
        font-weight: 400;
        font-size: 12px;
        }
        img{
            margin-left: 4px;
        }
    }
`