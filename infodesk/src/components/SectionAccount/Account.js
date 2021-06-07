import React, { useState } from "react";
import Button from '../Button/Button'
import {SectionAccount} from './styled'
import {useRequestData} from '../../hooks/useRequestData'

const FindHome = ({userName}) => {
  const [user, getUsers] = useRequestData('/user', {}, 'user')
  
    return (
        
        <SectionAccount>
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
                    <p>Adress: </p>
                    <p>Country: </p>
                    <p>Username: {user.UserName}</p>
                    <p>Password: ******</p>
                    <Button>Edit Profile</Button>
                </div>
            </div>
        </SectionAccount>
    )
};

export default FindHome;
