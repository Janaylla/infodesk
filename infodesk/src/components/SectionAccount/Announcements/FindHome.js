import React from "react";
import { DivSection, Comments} from './styled'
import CardHome from './CardHome'
import {useRequestData} from '../../../hooks/useRequestData'
const FindHome = () => {
    const [posts, getPosts] = useRequestData('/post/my', [], 'posts')
    return (
        <DivSection>
                {
                    posts && posts.map((post) =>{
                        return <CardHome
                        text={post.Text}
                        price={post.Price}
                        name={post.FirstName +" "+ post.LastName} 
                        contact={post.Email}
                        typeAccommodation={post.typeOfAccommodation}
                        id={post.Id}
                        userName={post.UserName}
                        date={post.Date}
                        address={post.Address}
                        />
                    })
                }
               
        </DivSection>
    )
};

export default FindHome;
