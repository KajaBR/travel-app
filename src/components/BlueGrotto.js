import React, { useState } from "react";

export const BlueGrotto = () => {
    const [showMore, setShowMore] = useState(false);
    return(
        <article>
           
            {showMore ? (<p>
                
                <h3>Jaskinia Blue Grotto</h3>
                
                Atrakcja, której nie możesz pominąć jest Blue 
                Grotto! Ma ponad 40 m wysokości i 26 m głębokości. <br></br>
                Wedłyg mitologii była domem dla syren i nimf morskich,
                które zwabiały żeglarzy swoim urokiem.
                <br></br> Blue Grotto można podziwiać z punktu widokowego
                znajdującego się tuż przy parkingu.<br></br> Jest również 
                możliwość wpłynięcia do jaskini wraz z przewodnikiem.
                My udaliśmy się trochę okrężną drogą, ale widoki 
                nam to wynagrodziły.
                            
                </p>) : 
                (<p>
                <h3>Jaskinia Blue Grotto</h3>
                
                Atrakcja, której nie możesz pominąć jest Blue 
                Grotto! Ma ponad 40 m wysokości i 26 m głębokości.
                </p>)}

                <button onClick={() => {setShowMore((prevState) => !prevState)}}>{showMore ? "Pokaż mniej" : 
                "Pokaż więcej"}</button>
        </article>
    )
}