import React from "react"

import user from "../../assets/img/user.jpg";

import FeatureList from "../../components/feature-list/feature-list.component";
import Gallery from "../../components/gallery/gallery.component";
import Header from "../../components/header/header.component";
import Overview from "../../components/overview/overview.component";
import Recommendation from "../../components/recommandations/recommendation.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import UserReviews from "../../components/user-reviews/user-reviews.component";

import { 
    Container, Content, MainContent, OverviewDetail,
    HotelDescriptionContainer, DescriptionParagraph
} from "./landing-page.style"; 

const LandingPage = () => {
    return(
        <Container>
            <Header userImage={user}/>
            <Content>
                <Sidebar />
                <MainContent>
                    <Gallery />
                    <Overview name={"Hotel Las Palmas"}/>
                    <OverviewDetail>
                        <HotelDescriptionContainer>
                            <DescriptionParagraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate.
                            </DescriptionParagraph>
                            <DescriptionParagraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua.
                            </DescriptionParagraph>
                            <FeatureList />
                            <Recommendation />
                        </HotelDescriptionContainer>

                        <UserReviews />
                    </OverviewDetail>
                </MainContent>
            </Content>
        </Container>
    );
}

export default LandingPage;