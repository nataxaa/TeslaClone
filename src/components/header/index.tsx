import { Container } from "./style";
import image from '../../image/tesla-header-novo.png'

export function Header(){
    return(
        <Container>
            <img src={image} alt="" />
            <ul>
                <li><a href="#FirstPage">Model 3</a></li>
                <li><a href="#SecondPage">Model Y</a></li>
                <li><a href="#ThirdPage">Model X</a></li>
                <li><a href="#QuarterPage">Solar Roof</a></li>
                <li><a href="#FifthPage">Solar Panels</a></li>
                <li><a href="#LastPage">Accessories</a></li>
            </ul>
            <ul>
                <li>Shop</li>
                <li>Account</li>
                <li>Menu</li>
            </ul>
        </Container>
    )
}