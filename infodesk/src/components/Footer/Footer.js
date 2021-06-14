import React from "react";
import { DivFooter, DivInfo, NavFooter, SocialNetworks, DivCredits, SubMenu } from './styled'
import { ArrowDropDown } from '@material-ui/icons'
import Logo from '../../assets/logo/Infodesk.png'
import { Nav } from '../../GlobalStyle'

import Face from '../../assets/icons-social-networks/facebook.svg'
import Instagram from '../../assets/icons-social-networks/insta.svg'
import Twitter from '../../assets/icons-social-networks/linkedin.svg'
import Linkedin from '../../assets/icons-social-networks/tw.svg'

import { goToAbout, goToHome, goToVideos, goToFind, goToLogin, goToStory, goToAccount } from '../../Routes/Coordinators'
import { useHistory } from 'react-router-dom'

const Footer = () => {
    const history = useHistory()
    return (<>
        <DivFooter>
            <div>
                <DivInfo>
                    <img src={Logo} onClick={() => goToHome(history)}/>
                </DivInfo>
                <NavFooter>
                    <Nav>
                        <ul>
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
                                    <li onClick={() => goToFind(history)}>Find a roommate</li>
                                    <li>Student loan</li>
                                    <li>Banks</li>
                                    <li>Law</li>
                                    <li>Work</li>
                                    <li>Bureaucracy</li>
                                    <li>Daily basis in the NL</li>
                                    <li>Transportation</li>
                                </SubMenu>
                            </li>
                            <li  onClick={() => goToStory(history)}>
                                Stories & cases
            </li>
                            <li>
                                News & videos
            <ArrowDropDown />
                                <SubMenu>
                                    <li>{"News & Articles"}</li>
                                    <li onClick={() => goToVideos(history)} >Videos</li>
                                </SubMenu>
                            </li>
                        </ul>
                    </Nav>

                </NavFooter>
                <NavFooter>
                    <ul>
                        <li>
                            Terms of conditions
            </li>
                        <li>
                            Privacy
            </li>
                        <li>
                            Promote your event
            </li>
                        <li>
                            Promote your services
            </li>
                    </ul>
                </NavFooter>
            </div>
            <SocialNetworks>
                <div>
                    <h6>Follow us on:</h6>
                </div>
                <div>
                    <img src={Face} />
                    <img src={Instagram} />
                    <img src={Twitter} />
                    <img src={Linkedin} />
                </div>
            </SocialNetworks>
        </DivFooter>


        <DivCredits>
            <ul>
                <li>@2021-Infodesk</li>
            </ul>
            <ul>
                <li>disclaimer</li>
                <li>Cookie statement</li>
            </ul>
        </DivCredits>
    </>
    )
};

export default Footer;
