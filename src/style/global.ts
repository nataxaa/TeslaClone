import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
  --color-subtitle: #525252 ;
}

html{
        scroll-behavior:smooth;
        max-width:1366px ;
    }

*{
  margin:0 ;
  padding:0 ;
}

body{
  font-family: 'Rubik', sans-serif;
}


`