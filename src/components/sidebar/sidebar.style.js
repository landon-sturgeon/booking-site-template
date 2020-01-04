import styled, { css } from "styled-components";

import { COLORS } from "../../global.style";

const isActive = (props) => {
    if (props.highlight) {
        return (css`
            transform: scaleY(1);
            width: 100%;`
        )
    } else {
        return (css`
            transform: scaleY(0);
            width: 3px;`
        )
    }
}

export const Navigation = styled.nav`
    background-color: ${COLORS.darkGrey1};

    flex: 0 0 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SideNavList = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
`;

export const SideNavListItem = styled.li`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: ${COLORS.primary};
        ${ isActive }
        transition: transform 0.2s,
                    width 0.2s cubic-bezier(1, 0, 0, 1) 0.15s,
                    background-color 0.1s;
    }

    &:hover::before {
        transform: scaleY(1);
        width: 100%;
    }
`;

export const SideNavLink = styled.a`
    &:visited,
    &:link {
        color: ${COLORS.lightGrey1};
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        padding: 1.5rem 3rem;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 10;
    }
`;

export const SideNavIcon = styled.svg`
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;
`;

export const SideNavIconSpan = styled.span`

`;

export const LegalContent = styled.div`
    font-size: 1.2rem;
    text-align: center;
    padding: 2.5rem;
    color: ${COLORS.lightGrey4};
`;