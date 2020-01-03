import styled from "styled-components";
import { COLORS } from "../../global.style";

export const SearchBoxForm = styled.form`
    flex: 0 0 40%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchBoxInput = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: ${COLORS.lightGrey2};
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 100px;
    width: 90%;
    margin-right: -3.5rem;
    transition: all 0.5s;

    &:focus {
        outline: none
        width: 100%;
        background-color: ${COLORS.lightGrey4};
    }

    &::-webkit-input-placeholder {
        font-weight: 100;
        color: ${COLORS.lightGrey4};
    }

    &:focus + button {
        background-color: ${COLORS.lightGrey4};
    }
`;

export const SearchButton = styled.button`
    border: none;
    background-color: ${COLORS.lightGrey2};

    &:focus {
        outline: none;
    }

    &:active {
        transform: translateY(2px);
    }
`;

export const SearchButtonIcon = styled.svg`
    height: 2rem;
    width: 2rem;
`;