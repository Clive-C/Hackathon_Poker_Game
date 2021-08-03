import React from "react";


function StartLayout({hands, setHands}) {
    const joker = "/CardDeck/red_joker.png"
    const cards = [joker, joker, joker, joker, joker]
   
    return(
        <>
            {cards.map((card)=>(
                <img src={card} alt="Joker" width="175px" />
            ))}
        </>
    )
}

export default StartLayout;