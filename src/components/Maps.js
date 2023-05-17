import React from "react";

export const Maps = () => {
    const asia = {
        url:"./img/Asia.jpg"
    }

    const europe = {
        url:"./img/Europe.jpg"
    }
    return(
        <div>
            <img src={europe.url} alt="Europa" width="300px"/>
            <img src={asia.url} alt="Asia" width="300px"/>
        </div>
    )
}