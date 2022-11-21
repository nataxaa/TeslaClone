import styled from 'styled-components'


export const Container = styled.header`

    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    padding:0 30px;
    width:100vw ;
    position:fixed ;
    z-index:1 ;
    
img{
    width:9rem ;
}

ul{
    display:flex ;
    list-style:none ;
    gap:30px;
}
a{
    text-decoration:none ;
    color: #000 ;
    padding:4px 8px ;
    background-color:none ;
    transition:0.4s ;
    border-radius:4px ;
    :hover{
        background-color: #F5F5F5;
        
    }
}

`