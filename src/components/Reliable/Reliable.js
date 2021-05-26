import React from "react";
import { Section } from './styled'
import SectionImg from '../../assets/img/NETHERLANDS_JumbotronNL.png'
import Button from '../../components/Button/Button'
const Reliable = () => {

    return <Section>
        <img src={SectionImg} />
        <div className="divInformations">
            <div className="white">
            </div>
            <div className="orange">
            </div>
            <div className="blue">
                <h1>Reliable ande relevant information.</h1>
                <h1>Let us help you start your future</h1>
            </div>
            
        </div>
            <Button color="blue">Read about us</Button>
    </Section>
};

export default Reliable;
