import React from "react";

import { CustomImageContainer, ImageStyle } from "./custom-image.style";

const CustomImage = ({imageSrc}) => {
    console.log(imageSrc);
    return(<CustomImageContainer>
        <ImageStyle src={imageSrc} alt={`${imageSrc}Photo`} />
    </CustomImageContainer>);
};

export default CustomImage;