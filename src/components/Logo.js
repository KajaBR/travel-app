import React from "react";


export const Logo = () => {
    const logo = {
        url: "img/aTLogo.jpg"
    }

    return(
        <div>
           <img src={logo.url} alt="aboutTravel" width="200"
           style={{}}/>
        </div>
    )
}