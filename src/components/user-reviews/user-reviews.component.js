import React from "react";

import user1 from "../../assets/img/user-1.jpg";
import user2 from "../../assets/img/user-2.jpg";

import InlineButton from "../inline-button/inline-button.component";

import {
    UserReviewsContainer, UserReview, ReviewText, ReviewUser,
    ReviewUserImage, ReviewUserBox, ReviewUserName,
    ReviewUserDate, ReviewRating
} from "./user-reviews.style";

const UserReviews = () => (
    <UserReviewsContainer>
        <UserReview>
            <ReviewText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua.
            </ReviewText>
            <ReviewUser>
                <ReviewUserImage src={user1} alt="User1" />
                <ReviewUserBox>
                    <ReviewUserName>
                        Nick Smith
                    </ReviewUserName>
                    <ReviewUserDate>
                        Feb 23rd, 2020
                    </ReviewUserDate>
                </ReviewUserBox>
                <ReviewRating>
                    7.8
                </ReviewRating>
            </ReviewUser>
        </UserReview>

        <UserReview>
            <ReviewText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt.
            </ReviewText>
            <ReviewUser>
                <ReviewUserImage src={user2} alt="User2" />
                <ReviewUserBox>
                    <ReviewUserName>
                        Mary Thomas
                    </ReviewUserName>
                    <ReviewUserDate>
                        Sept 6rd, 2019
                    </ReviewUserDate>
                </ReviewUserBox>
                <ReviewRating>
                    9.2
                </ReviewRating>
            </ReviewUser>
        </UserReview>
        <InlineButton buttonTitle={`SHOW ALL`}/>
    </UserReviewsContainer>
);

export default UserReviews;