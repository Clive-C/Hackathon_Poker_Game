import React from "react";
import DisplayCard from "./DisplayCard";

function DealtHand ({ hands }) {
    
    const cards = [hands[0][0],hands[1][0],hands[2][0],hands[3][0],hands[4][0]]
  
    return(
        <>
               
            <div>
                
                {cards.map((card)=> (
                    <span key={card.id}>
                        <DisplayCard card={card}/>
                    </span>
                ))}
            </div>
          
        </>
        
       
        
        
    )
}
export default DealtHand;