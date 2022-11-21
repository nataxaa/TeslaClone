import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function SecondPage(){
    useEffect(()=>{
        Aos.init({duration: 1800})
    }, [])
    return(
        <Container id="SecondPage">
            <div data-aos='fade-up' className="text-base">
                <h1>Model Y</h1>
                <p>Test Drive</p>
            </div>
        </Container>
    )
}