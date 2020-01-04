import React from "react"

import user from "../../assets/img/user.jpg";

import Gallery from "../../components/gallery/gallery.component";
import Header from "../../components/header/header.component";
import Overview from "../../components/overview/overview.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import { Container, Content, MainContent } from "./landing-page.style"; 

const LandingPage = () => {
    return(
        <Container>
            <Header userImage={user}/>
            <Content>
                <Sidebar />
                <MainContent>
                    <Gallery />
                    <Overview name={"Hotel Las Palmas"}/>
                </MainContent>
            </Content>
        </Container>
    );
}

export default LandingPage;