import React from "react";

import CTAButton from "../cta-btn/cta-btn.component";

import { CallToActionContainer, CTABookNow } from "./cta.style";

const CallToAction = () => (
    <CallToActionContainer>
        <CTABookNow>
            Good news! We have 4 free rooms for your selected dates!
        </CTABookNow>
        <CTAButton/>
    </CallToActionContainer>
);

export default CallToAction;
