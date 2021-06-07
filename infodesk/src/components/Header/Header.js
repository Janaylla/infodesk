import React from "react";
import { Main, Left, Right } from "./styled";
import {Nav, SubMenu} from '../../GlobalStyle'
import { ReactComponent as Logo } from '../../assets/logo/Image1.svg'
import { ArrowDropDown, Search } from '@material-ui/icons'
import Button from '../../components/Button/Button'
import {goToAbout, goToHome, goToVideos, goToFind, goToLogin, goToStory} from '../../Routes/Coordinators'
import {useHistory} from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  return (
    <Main>
      <Left>
        <Logo className="logo" onClick={() => goToHome(history)}/>
        <Nav>
          <ul >
            <li>
              About
              <ArrowDropDown />
              <SubMenu>
                <li onClick={() => goToAbout(history)}>Our story</li>  
                <li>Our team</li>  
                <li>Partners</li>  
              </SubMenu>
            </li>
            <li>
              Get informed about
              <ArrowDropDown />
              <SubMenu>
                <li>Documentation</li>
                <li>Culture</li>
                <li  onClick={() => goToFind(history)}>Find a roommate</li>
                <li>Student loan</li>
                <li>Banks</li>
                <li>Law</li>
                <li>Work</li>
                <li>Bureaucracy</li>
                <li>Daily basis in the NL</li>
                <li>Transportation</li>
              </SubMenu>
            </li>
            <li onClick={() => goToStory(history)}>
              {"Stories & cases"}
            </li>
            <li>
           {" News & videos"}
            <ArrowDropDown />
            <SubMenu>
              <li>{"News & Articles"}</li>
              <li onClick={() => goToVideos(history)} >Videos</li>
            </SubMenu>
            </li>
          </ul>
        </Nav>
      </Left>
      <Right>
        <div className="search">
          <input />
          <Search />
        </div>
        <Button onClick={() => goToLogin(history)}>
          Login
        </Button>
      </Right>
    </Main>
  );
}
