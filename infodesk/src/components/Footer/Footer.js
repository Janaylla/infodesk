import React from "react";
import { DivFooter, DivInfo, NavFooter, SocialNetworks, DivCredits } from './styled'
import { ArrowDropDown } from '@material-ui/icons'
import Logo from '../../assets/logo/Infodesk.png'

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
                        <img src="" />
                        <img src="" />
                        <img src="" />
                    <img src="" />
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
