import React from "react";
import {DivMenu} from './styled'
import {PermIdentity, BookmarkBorder} from '@material-ui/icons'
import {ReactComponent as Campaign} from '../../assets/icons/campaign_black_24dp.svg'
import {ReactComponent as LogOut} from '../../assets/icons/logout_black_24dp.svg'
const Search = ({setSection}) => {
    return (
        <DivMenu>
                <h4 onClick={() => setSection(0)}><PermIdentity/>Account</h4>
                <h4 onClick={() => setSection(1)}><Campaign />My announcements</h4>
                <h4 onClick={() => setSection(2)}><BookmarkBorder/>Saved Videos</h4>
                <h4 onClick={() => setSection(3)}><LogOut/>Log Out</h4>
        </DivMenu>
    )
};

export default Search;
