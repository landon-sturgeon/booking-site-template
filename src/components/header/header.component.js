import React from "react";

import logo from "../../assets/img/logo.svg";

import SearchBox from "../search-box/search-box.component"
import UserNavigation from "../user-nav/user-nav.component";

import { HeaderContainer, LogoImage } from "./header.style";

const Header = ({userImage}) => (
    <HeaderContainer>
        <LogoImage src={logo} alt="logo" />
        <SearchBox action="/"/>
        <UserNavigation userImage={userImage}/>
    </HeaderContainer>
);

export default Header;