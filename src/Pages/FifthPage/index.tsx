import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function FifthPage(){
    useEffect(()=>{
        Aos.init({duration: 1800})
    }, [])
    return(
        <Container id="FifthPage">
            <div data-aos='fade-up' className="text-base">
                <h1>Solar Roof</h1>
                <p>Produce Clean Energy From Your Roof</p>
            </div>
        </Container>
    )
}
