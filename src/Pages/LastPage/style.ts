import styled from "styled-components";
import image from '../../image/LastPage.png'

export const Container = styled.div`

height:100vh ;
background-image: url(${image}) ;
background-position:center ;
background-size: 20% 50% ;
background-repeat:no-repeat ;

div.text-base{
    z-index:0 ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    margin: 0 auto  ;
    padding-top:6rem ;
    width:fit-content ;
    h1{
        font-size:45px ;
        font-weight:100 ;
    }
    p{
        color:var(--color-subtitle) ;
        width:fit-content ;
        text-align:center ;
    }
    button{
        margin-top:21rem ;
        background-color:#141414 ;
        padding:8px 90px;
        color:#FFF ;
        font-size:17px ;
        border-radius:5px ;
    }
}

`