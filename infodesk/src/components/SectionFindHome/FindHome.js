import React, { useState } from "react";
import Button from '../Button/Button'
import { DivSection, Comments, DivFind} from './styled'
import Search from './FormSearch'
import CardHome from './CardHome'
import {useRequestData} from '../../hooks/useRequestData'
import NewPost from '../../components/NewPost/NewPost'
const FindHome = () => {
    const [posts, getPosts] = useRequestData('/post/all', [], 'posts')
    const [openNewPost, setOpenNewPost] = useState(false);
    console.log(posts)
    return (
        <DivSection>
            <Search/>
            <DivFind>
           <h2>Do you have place to announce?</h2>
           <Button color="orange" onClick={() => setOpenNewPost(true)}>Post It</Button>

             <NewPost open={openNewPost} update={getPosts} setOpen={setOpenNewPost}/> 

            <Comments>
                {
                    posts && posts.map((post) =>{
                        return <CardHome
                        text={post.Text}
                        price={post.Price}
                        name={post.FirstName +" "+ post.LastName} 
                        contact={post.Email}
                        typeAccommodation={post.typeOfAccommodation}
                        id={post.Id}
                        />
                    })
                }
               
            </Comments>
            </DivFind>
        </DivSection>
    )
};

export default FindHome;
