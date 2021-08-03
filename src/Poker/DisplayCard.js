import React, {useEffect, useState } from "react";

function DisplayCard ({card}) {
    
    const [displayWidth, setDisplayWidth] = useState(false)
    const [retainStatus, setRetainStatus] = useState(false);
   
    useEffect(()=>{
        if (retainStatus){
            card.retain = true;
        } else{
            card.retain = false;
        }
    },[retainStatus])

    const handleClick = () =>{
        setRetainStatus(!retainStatus)
        setDisplayWidth(!displayWidth) 
    }

    return(
        <>
            <img onClick={handleClick} src={card.img} width={displayWidth ? "200" : "175"} alt={card.name}/>
        </>
    )
}

export default DisplayCard;