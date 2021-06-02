import React from "react";
import { Main, Left, Right } from "./styled";
import {Nav} from '../../GlobalStyle'
import { ReactComponent as Logo } from '../../assets/logo/Image1.svg'
import { ArrowDropDown, Search } from '@material-ui/icons'
import Button from '../../components/Button/Button'
export default function Header() {
  return (
    <Main>
      <Left>
        <Logo className="logo" />
        <Nav>
          <ul >
            <li>
              About
              <ArrowDropDown />
            </li>
            <li>
              Get informed about
              <ArrowDropDown />
            </li>
            <li>
              Stories & cases
            </li>
            <li>
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
