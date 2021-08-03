import React, {useState, useEffect} from "react";
import DisplayCard from "./DisplayCard";

function SecondHand ({ newHands }) {
    const [cards, setCards] = useState([])

    
    useEffect(()=>{
        async function loadCards(){
            const list = [newHands[0][0],newHands[1][0],newHands[2][0],newHands[3][0],newHands[4][0]]
            setCards(()=>list)
        }
        loadCards();
    },[])
 
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
export default SecondHand;