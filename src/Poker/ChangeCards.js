import React, { useEffect, useState } from "react";
import data from "../Data/data"
import randomNumber from "../utils/randomNumber"
import DealtHand from "./DealtHand"


function ChangeCards({hands, setNewHands}) {
   
 
    const currentList = [] ;
    const newHand = {}
   
    useEffect(()=>{
        async function loadCards(){
            await Object.entries(hands).forEach((hand)=>{
                currentList.push(hand[1][0].id)
            })
        
            await Object.entries(hands).forEach((hand, index)=>{
                let num = 0;
    
                if (hand[1][0].retain == false ){
                    num = randomNumber(1,52);
                    while (currentList.includes(num)){
                        num = randomNumber(1,52);
                    } 
                    
                } else {
                    num = hand[1][0].id
                }
            
                const card = data.filter((card)=> card.id === num)
                newHand[index] = card
            })    
        }
        loadCards();
        setNewHands(()=>newHand)     
 

    },[])
    
    
 
    
    return (
        <>
            {/* <DealtHand hands={hands}/> */}
            <h3>Please press "DEAL" again to see your results...</h3>
        </>
    )
}

export default ChangeCards;