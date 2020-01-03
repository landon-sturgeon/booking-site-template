import React from "react";

import { CustomImageContainer, ImageStyle, UserNameSpan } from "./custom-user-image.style";

const CustomImage = ({imageSrc}) => (
    <CustomImageContainer>
        <ImageStyle src={imageSrc} alt={`${imageSrc}Photo`} />
        <UserNameSpan>Landon</UserNameSpan>
    </CustomImageContainer>
);

export default CustomImage;