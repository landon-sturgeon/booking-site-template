import React from "react";

import { InlinebuttonContainer } from "./inline-button.style";

const InlineButton = ({buttonTitle}) => (
    <InlinebuttonContainer>
        {buttonTitle}
    </InlinebuttonContainer>
);

export default InlineButton;