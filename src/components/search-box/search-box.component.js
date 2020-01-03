import React from "react";

import Sprite from "../../assets/img/sprite.svg";

import { 
    SearchBoxForm, SearchBoxInput, SearchButton, SearchButtonIcon
} from "./search-box.style";

const SearchBox = () => (
    <SearchBoxForm>
        <SearchBoxInput placeholder="Search Hotels"/>
        <SearchButton>
            <SearchButtonIcon>
                <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
            </SearchButtonIcon>
        </SearchButton>
    </SearchBoxForm>
);

export default SearchBox;