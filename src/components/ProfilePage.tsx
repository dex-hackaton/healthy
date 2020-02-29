import React from "react";
import {BootstrapContainer} from "./ui/BootstrapContainer";
import {Profile} from "./profile/Profile";

export const ProfilePage = () => {
    return (
        <BootstrapContainer>           
            <Profile
                userImage={"https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                userName={"Вадим Зожный"}
                weight={80}
                height={177}
                age={30}
            />
        </BootstrapContainer>
    );
};
