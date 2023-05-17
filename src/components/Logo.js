import React from "react";

export const Logo = () => {
    const logo = {
        url: "./img/aboutTravel"
    }

    return(
        <div>
           <img src={logo} alt="aboutTravel" />
        </div>
    )
}