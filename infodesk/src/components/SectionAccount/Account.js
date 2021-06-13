import React, { useState } from "react";
import Button from '../Button/Button'
import { SectionAccount } from './styled'
import { useRequestData } from '../../hooks/useRequestData'
import EditPost from './FormEditProfile/FormEdit'

const FindHome = () => {
    const [user, getUser] = useRequestData('/user', {}, 'user')
    const [openNewPost, setOpenNewPost] = useState(false);

    return (

        <SectionAccount>
            {openNewPost && <EditPost open={openNewPost} update={getUser} setOpen={setOpenNewPost} user={user}/>}
            <div className="hello">
                <h2>
                    Hello, {user.FirstName}
                </h2>
                <h2>
                    Here you will find all your relevant information
                </h2>
            </div>

            <div className="you">
                <h2>This You</h2>
                <div>
                    <p>Name: {user.FirstName} {user.LastName}</p>
                    <p>Email: {user.Email}</p>
                    <p>Address: {user.Address}</p>
                    <p>Username: {user.UserName}</p>
                    <p>Password: ******</p>
                    <Button onClick={() => setOpenNewPost(true)}>Edit Profile</Button>
                </div>
            </div>
        </SectionAccount>
    )
};

export default FindHome;
