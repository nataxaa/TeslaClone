import { Header } from "../../components/header";
import { Container } from "./style";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function FirstPage(){
    useEffect(()=>{
        Aos.init({duration: 1800})
    }, [])
    return(
        <Container id="FirstPage">
            <Header/>
            <div data-aos='fade-up' className="text-base">
                <h1>Model 3</h1>
                <p>Test Drive</p>
            </div>
        </Container>
    )
}