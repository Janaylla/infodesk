import React from "react";
import { Main, Left, Right } from "./styled";
import {Nav} from '../../GlobalStyle'
import { ReactComponent as Logo } from '../../assets/logo/Image1.svg'
import { ArrowDropDown, Search } from '@material-ui/icons'
import Button from '../../components/Button/Button'
import {goToAbout, goToHome, goToVideos, goToFind} from '../../Routes/Coordinators'
import {useHistory} from 'react-router-dom'
export default function Header() {
  const history = useHistory()
  return (
    <Main>
      <Left>
        <Logo className="logo" onClick={() => goToHome(history)}/>
        <Nav>
          <ul >
            <li onClick={() => goToAbout(history)}>
              About
              <ArrowDropDown />
            </li>
            <li onClick={() => goToFind(history)}>
              Get informed about
              <ArrowDropDown />
            </li>
            <li>
              Stories & cases
            </li>
            <li  onClick={() => goToVideos(history)}>
            News & videos
            <ArrowDropDown />
            </li>
          </ul>
        </Nav>
      </Left>
      <Right>
        <div className="search">
          <input />
          <Search />
        </div>
        <Button>
          Login
        </Button>
      </Right>
    </Main>
  );
}
