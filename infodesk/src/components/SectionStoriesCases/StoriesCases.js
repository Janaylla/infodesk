import React, { useState } from "react";
import Button from '../Button/Button'
import { DivSection, Comments, DivFind} from './styled'
import Search from './FormSearch'
import CardStory from './CardStory'
import {useRequestData} from '../../hooks/useRequestData'
import NewPost from '../NewPost/NewPost'
const FindHome = () => {
    const [stories, getStories] = useRequestData('/story/all', [], 'stories')
    const [openNewPost, setOpenNewPost] = useState(false);
    console.log(stories)
    return (
        <DivSection>
            <Search/>
            <DivFind>
           <h2>Do you have place to announce?</h2>
           <Button color="orange" onClick={() => setOpenNewPost(true)}>Post It</Button>

             <NewPost open={openNewPost} update={getStories} setOpen={setOpenNewPost}/> 

            <Comments>
                {
                    stories && stories.map((story) =>{
                        return <CardStory
                            title={story.Title}
                            userName={story.UserName}
                            date={story.Date}
                            id={story.Id}
                            text={story.Text}
                            topic={story.Topic}
                            likes={story.Likes}
                            disLikes={story.DisLikes}
                            myLike={story.MyLike}
                            update={getStories}
                        />
                    })
                }
                
            </Comments>
            </DivFind>
        </DivSection>
    )
};

export default FindHome;
