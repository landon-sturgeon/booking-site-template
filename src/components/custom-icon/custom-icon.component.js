import React from "react";

import Sprite from "../../assets/img/sprite.svg";

import { IconContainer, CustomIconImage, UserNotificationSpan } from "./custom-icon.style";

const CustomIcon = ({iconImage}) => (
    <IconContainer>
        <CustomIconImage>
            <use xlinkHref={`${Sprite}#${iconImage}`} />
        </CustomIconImage>
        <UserNotificationSpan>7</UserNotificationSpan>
    </IconContainer>
)

export default CustomIcon;