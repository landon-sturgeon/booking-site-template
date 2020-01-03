import React from "react";

import CustomIcon from "../custom-icon/custom-icon.component";
import CustomImage from "../custom-image/custom-image.component";

import { 
    UserNavContainer, UserNotificationSpan, UserNameSpan
} from "./user-nav.style";

const UserNavigation = ({userImage}) => (
    <UserNavContainer>
        <CustomIcon iconImage={"icon-bookmark"} />
        <UserNotificationSpan>7</UserNotificationSpan>
        <CustomIcon iconImage={"icon-chat"} />
        <UserNotificationSpan>13</UserNotificationSpan>
        <CustomImage imageSrc={userImage} />
        <UserNameSpan>Landon</UserNameSpan>
    </UserNavContainer>
);

export default UserNavigation;