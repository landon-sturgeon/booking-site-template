import React from "react"

import user from "../../assets/img/user.jpg";

import Header from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";

import { Container, Content, MainContent } from "./landing-page.style"; 

const LandingPage = () => {
    return(
        <Container>
            <Header userImage={user}/>
            <Content>
                <Sidebar />
                <MainContent>
                    main content
                </MainContent>
            </Content>
        </Container>
    );
}

export default LandingPage;