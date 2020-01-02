import React from "react";

import sprite from "../../assets/img/sprite.svg";

const Icon = (iconImage) => (
    <svg>
        <use xlinkHref={`${sprite}#${iconImage}`} />
    </svg>
)

export default Icon;