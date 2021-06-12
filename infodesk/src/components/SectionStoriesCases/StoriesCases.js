import React, { useState } from "react";
import Button from '../Button/Button'
import { DivSection, Comments, DivFind } from './styled'
import Search from './FormSearch'
import CardStory from './CardStory'
import { useRequestData } from '../../hooks/useRequestData'
import NewStory from '../NewStory/NewStory'
const FindHome = () => {
    const [query, setQuery] = useState("");
    const [stories, getStories] = useRequestData(`/story/all?${query}`, [], 'stories')
    const [openNewPost, setOpenNewPost] = useState(false);
    console.log(stories)
    const topics = ['Documentation',
        'Culture',
        'Find_a_roommate',
        'Student_loan', 'Banks',
        'Law',
        'Work',
        'Bureaucracy',
        'Daily_basis_en_the_NL',
        'Transportation']
    return (
        <DivSection>
            <Search update={getStories} setQuery={setQuery} query={query} topics={topics} />
            <DivFind>
                <h2>Do you have place to announce?</h2>
                <Button color="orange" onClick={() => setOpenNewPost(true)}>Story It</Button>

                <NewStory topics={topics} open={openNewPost} update={getStories} setOpen={setOpenNewPost} />

                <Comments>
                    {
                        stories && stories.map((story) => {
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
                                myComment={story.MyComment}
                            />
                        })
                    }

                </Comments>
            </DivFind>
        </DivSection>
    )
};

export default FindHome;
