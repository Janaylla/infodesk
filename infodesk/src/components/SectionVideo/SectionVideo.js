import React from "react";
import { DivSection, Title} from './styled'
import {AccessTime} from '@material-ui/icons'
import PostComment from '../../components/PostComment/PostComment'
import Coment from '../../components/Comment/CardComment'
const SectionVideo = () => {
    
    return (
        <DivSection>
            <video src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" controls autoplay></video>
            <Title>
                <h2>Title </h2>
                <h3><AccessTime/>May, 2021</h3>
            </Title>
            <PostComment/>
           <Coment name="Felipe" text="Reliable and relevant information.
Let us help you start your future" like/>
        </DivSection>
    )
};

export default SectionVideo;
