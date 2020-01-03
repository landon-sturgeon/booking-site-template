import React from "react";

import CustomIcon from "../custom-icon/custom-icon.component";
import CustomImage from "../custom-user-image/custom-user-image.component";

import { 
    UserNavContainer
} from "./user-nav.style";

const UserNavigation = ({userImage}) => (
    <UserNavContainer>
        <CustomIcon iconImage={"icon-bookmark"} />
        <CustomIcon iconImage={"icon-chat"} />
        <CustomImage imageSrc={userImage} />
    </UserNavContainer>
);

export default UserNavigation;