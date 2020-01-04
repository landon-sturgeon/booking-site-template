import React from "react";

import hotel1 from "../../assets/img/hotel-1.jpg";
import hotel2 from "../../assets/img/hotel-2.jpg";
import hotel3 from "../../assets/img/hotel-3.jpg";

import { 
    GalleryContainer, GalleryItem, GalleryPhoto 
} from "./gallery.style";

const Gallery = () => (
    <GalleryContainer>

        <GalleryItem>
            <GalleryPhoto src={hotel1} alt="Hotel1"/>
        </GalleryItem>

        <GalleryItem>
            <GalleryPhoto src={hotel2} alt="Hotel2"/>
        </GalleryItem>

        <GalleryItem>
            <GalleryPhoto src={hotel3} alt="Hotel3"/>
        </GalleryItem>

    </GalleryContainer>
);

export default Gallery;