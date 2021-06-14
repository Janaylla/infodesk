import React from "react";
import { Section1 } from './styled'
import Section from '../../assets/img/Homepage-section1.jpeg'
import Button from '../../components/Button/Button'
import { goToAbout, goToHome, goToVideos, goToFind, goToStory } from '../../Routes/Coordinators'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history =  useHistory();
    return <Section1>
        <img src={Section} />
        <div className="divButtons">
        <Button className="b1" onClick={() => goToAbout(history)}>Check the info</Button>
        <Button className="b2" onClick={() => goToStory(history)}>Check all stories</Button>
        <Button className="b3" onClick={() => goToVideos(history)}>Check all videos</Button>
        </div>
    </Section1>
};

export default HomePage;
