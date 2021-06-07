import React from "react";
import { DivFooter, DivInfo, NavFooter, SocialNetworks, DivCredits } from './styled'
import { ArrowDropDown } from '@material-ui/icons'
import Logo from '../../assets/logo/Infodesk.png'

import Face from '../../assets/icons-social-networks/facebook.svg'
import Instagram from '../../assets/icons-social-networks/insta.svg'
import Twitter from '../../assets/icons-social-networks/linkedin.svg'
import Linkedin from '../../assets/icons-social-networks/tw.svg'

const Footer = () => {
    return (
        <>
            <DivFooter>
                <div>
                    <DivInfo>
                        <img src={Logo} />
                    </DivInfo>
                    <NavFooter>
                        <ul>
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
                    </NavFooter>
                    <NavFooter>
                        <ul>
                            <li>
                                About
            </li>
                            <li>
                                Get informed about
            </li>
                            <li>
                                Stories & cases
            </li>
                            <li>
                                News & videos
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
