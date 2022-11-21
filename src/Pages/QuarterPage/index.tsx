import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function QuarterPage(){
    useEffect(()=>{
        Aos.init({duration: 1800})
    }, [])
    return(
        <Container id="QuarterPage">
            <div data-aos='fade-up' className="text-base">
                <h1>Solar Panels</h1>
                <p>Lowest Cost Solar Panels in America</p>
            </div>
        </Container>
    )
}