import React from "react";

import Sprite from "../../assets/img/sprite.svg";

import { 
    Navigation, SideNavList, SideNavListItem, SideNavLink, 
    SideNavIcon, SideNavIconSpan, LegalContent
} from "./sidebar.style";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "hotel"
        }
    }

    handleClick = (event) => {
        if (event.target.id !== this.props.active) {
            this.setState({
                active: event.target.id
            });
        }
    }

    render() {
        return (
            <Navigation>
                <SideNavList>
                    <SideNavListItem 
                        highlight={this.state.active === "hotel"}
                        onClick={this.handleClick}
                    >
                        <SideNavLink id="hotel" href="#">
                            <SideNavIcon id="hotel">
                                <use xlinkHref={`${Sprite}#icon-home`} />
                            </SideNavIcon>
                            <SideNavIconSpan id="hotel">Hotel</SideNavIconSpan>
                        </SideNavLink>
                    </SideNavListItem>

                    <SideNavListItem
                        highlight={this.state.active === "flight"}
                        onClick={this.handleClick}
                    >
                        <SideNavLink id="flight" href="#">
                            <SideNavIcon id="flight">
                                <use xlinkHref={`${Sprite}#icon-aircraft-take-off`} />
                            </SideNavIcon>
                            <SideNavIconSpan id="flight">Flight</SideNavIconSpan>
                        </SideNavLink>
                    </SideNavListItem>

                    <SideNavListItem 
                        highlight={this.state.active === "rental"}
                        onClick={this.handleClick}
                    >
                        <SideNavLink id="rental" href="#">
                            <SideNavIcon id="rental">
                                <use xlinkHref={`${Sprite}#icon-key`} />
                            </SideNavIcon>
                            <SideNavIconSpan id="rental">Car Rental</SideNavIconSpan>
                        </SideNavLink>
                    </SideNavListItem>

                    <SideNavListItem 
                        highlight={this.state.active === "tour"}
                        onClick={this.handleClick}
                    >
                        <SideNavLink id="tour" href="#">
                            <SideNavIcon id="tour">
                                <use xlinkHref={`${Sprite}#icon-map`} />
                            </SideNavIcon>
                            <SideNavIconSpan id="tour">Tours</SideNavIconSpan>
                        </SideNavLink>
                    </SideNavListItem>
                </SideNavList>
                <LegalContent>
                    &copy; 2020 by Landon S. All rights reserved.
                </LegalContent>
            </Navigation>
        )
    }
};

export default Sidebar;