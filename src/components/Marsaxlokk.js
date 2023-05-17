import React, { useState } from "react";

export const Marsaxlokk = () => {
    const [showMore, setShowMore] = useState(false);
    return(
        <article>
           
            {showMore ? (<p>
                
                <h3>Wioska rybacka Marsaxlokk</h3>
                
                Kolejny punkt, który powienien się znaleźć na 
                Waszej liście to Wioska rybacka Marsaxlokk. 
                Jest to niezwykle urocze i spokojne miejsce. <br></br>
                Warto spróbować pysznych dań z owocami morza.
                <br></br> My zdecydowaliśmy się na spaghetti z 
                owocami morza oraz grilowaną ośmiornicą.
                            
                </p>) : 
                (<p>
                <h3>Wioska rybacka Marsaxlokk</h3>
                
                Kolejny punkt, który powienien się znaleźć na 
                Waszej liście to Wioska rybacka Marsaxlokk. 
                Jest to niezwykle urocze i spokojne miejsce.
                </p>)}

                <button onClick={() => {setShowMore((prevState) => !prevState)}}>{showMore ? "Pokaż mniej" : 
                "Pokaż więcej"}</button>
        </article>
    )
}