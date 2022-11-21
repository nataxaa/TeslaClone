import { useEffect } from "react";
import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'

export function LastPage(){
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <Container id="LastPage">
            <div data-aos='fade-up' className="text-base">
                <h1>Accessories</h1>
                <button>Shop Now</button>
            </div>
        </Container>
    )
}