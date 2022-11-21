import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function ThirdPage(){
    useEffect(()=>{
        Aos.init({duration: 1800})
    }, [])
    return(
        <Container id="ThirdPage">
            <div data-aos='fade-up' className="text-base">
                <h1>Model X</h1>
                <p>Test Drive</p>
            </div>
        </Container>
    )
}