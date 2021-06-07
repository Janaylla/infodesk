import React, { useState } from "react";
import { DivSection, DivAccount} from './styled'
import Menu from './Menu'
import AccountS from './Account'
import Announcements from './Announcements'
import Videos from './SavedVideo'
import { goToHome } from '../../Routes/Coordinators'
import { useHistory } from 'react-router-dom'

const Account = () => {
    const [section, setSection] = useState(0)
    const history = useHistory()
    const sectionShow = () =>{
        switch(section){
            case 0:
                return <AccountS/>
            case 1:
                return <Announcements/>
            case 2:
                return <Videos/>
            case 3:
                localStorage.removeItem('token')
                goToHome(history)

        }
        return (<h1>asd</h1>)
    }
    return (
        <DivSection>
            <Menu setSection={setSection}/>
            <DivAccount>
           <h2>Account</h2>
                {sectionShow()}
            </DivAccount>
        </DivSection>
    )
};

export default Account;
