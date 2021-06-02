import React from "react";
import { Section1 } from './styled'
import Section from '../../assets/img/Homepage-section1.jpeg'
import Button from '../../components/Button/Button'
const HomePage = () => {

    return <Section1>
        <img src={Section} />
        <div className="divButtons">
        <Button className="b1">Check the info</Button>
        <Button className="b2">Check all stories</Button>
        <Button className="b3">Check all videos</Button>
        </div>
    </Section1>
};

export default HomePage;
