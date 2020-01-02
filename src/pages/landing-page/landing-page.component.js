import React from "react"

import Icon from "../../components/icon/icon.component";
import InputField from "../../components/input-field/input-field.component";
import SearchButton from "../../components/search-button/search-button.component";

import user from "../../assets/img/user.jpg";
import websiteLogo from "../../assets/img/logo.svg";

const LandingPage = () => (
    <div className="container">
        <header className="header">
            <img src={websiteLogo} alt="booking website logo" className="logo"/>

            <form action="/" className="search">
                <InputField className="search__input" placeholder="Search Hotels" />
                <SearchButton className="search__button"/>
            </form>
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <Icon iconImage="icon-bookmark" className="user-nav__icon" />
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <Icon iconImage="icon-chat" className="user-nav__icon" />
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src={user} alt="UserPhoto" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">Landon</span>
                </div>
            </nav>
        </header>

        <div className="content">
            <nav className="sidebar">
                Navigation
            </nav>
            <main className="hotel-view">
                Hotel View
            </main>
        </div>
    </div>
)

export default LandingPage;