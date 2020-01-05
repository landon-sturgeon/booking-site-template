import React from "react";

import { 
    CTAButtonContainer, BtnTextHiddenSpan, BtnTextVisibleSpan
} from "./cta-btn.style";

const CTAButton = () => (
    <CTAButtonContainer>
        <BtnTextVisibleSpan>book now</BtnTextVisibleSpan>
        <BtnTextHiddenSpan>only 4 rooms left</BtnTextHiddenSpan>
    </CTAButtonContainer>
);

export default CTAButton;