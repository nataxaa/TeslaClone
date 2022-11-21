import styled from 'styled-components'
import image from '../../image/FirstPage.jpg'

export const Container = styled.div`

height:100vh ;
background-image: url(${image}) ;
background-position:center ;
background-size: 100% 150%;
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
}


`