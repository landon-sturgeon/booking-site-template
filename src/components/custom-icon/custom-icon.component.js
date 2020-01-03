import React from "react";

import Sprite from "../../assets/img/sprite.svg";

import { IconContainer, CustomIconImage } from "./custom-icon.style";

const CustomIcon = ({iconImage}) => (
    <IconContainer>
        <CustomIconImage>
            <use xlinkHref={`${Sprite}#${iconImage}`} />
        </CustomIconImage>
    </IconContainer>
)

export default CustomIcon;