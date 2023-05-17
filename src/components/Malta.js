import React, { useState } from "react";
import "./StyleCSS.css";


export const Malta = () => {
    const [showMore, setShowMore] = useState(false);

    const valettaBalcons ={
        url: "./img/ValettaBalcons.jpg"
    }

  
    return(
        <article>
            <h2>Malta</h2>
            <h3>Miejsca, które warto zobaczyć będąc na Malcie</h3>

            {showMore ? (<p>
                
                <h3>Valetta</h3>
                <img src={valettaBalcons.url} alt="Valetta" width="400"/>
                
                Numer jeden, który powinnien się znaleźć na
                Twojej liście to oczywiście stolica Malty, czyli Valetta. 
                Została ona wpisana na Listę Światowego Dziedzictwa UNESCO.<br></br>
                Spotkasz tam liczne kolorowe, drewniane balkony. Były
                one kiedyś symbolem bogactwa i obiektem prestiżu maltańskich rodzin. <br></br>
                W Valettcie warto zobaczyć Górne i Dolne Ogrody Barrakka, 
                z których rozpościerają się piękne widoki na panoramę miasta 
                i zatokę Grand Harbour oraz maltańskie Tree Cities. <br></br>

                <span>W Valettcie znaduje się również punkt 
                autobusowy, z którego można dojechać z każde miejsce
                na Malcie. Każdy przejad kosztuje 2 Euro. Można róznież
                wykupić karnet na 15 Euro. 
                </span>
                
                </p>) : 
                (<p><h3>Valetta</h3>Numer jeden, który powinnien się znaleźć na
                Twojej liście to oczywiście stolica Malty, czyli Valetta. 
                Została ona wpisana na Listę Światowego Dziedzictwa UNESCO.</p>)}

                <button onClick={() => {setShowMore((prevState) => !prevState)}}>{showMore ? "Pokaż mniej" : 
                "Pokaż więcej"}</button>
                


        </article>
    )
}