import React from "react";
export default function Header() {
  return (
        <Nav>
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
        </Nav>
  );
}
