
function WinLose ({newHands, setMessage}){
    const list = [newHands[0][0],newHands[1][0],newHands[2][0],newHands[3][0],newHands[4][0]]
    const valueList = list.map((card)=> card.value)
    const suitList = list.map((card)=> card.suit)
  
    valueList.sort((a,b)=> a-b)
    
    //for pairs
    const pairList = []
    for (let i=1; i<5; i++){
        if (valueList[i] === valueList[i-1] ){
            pairList.push(valueList[i])
        }
     
    }
    let spades = 0
    let hearts = 0
    let clubs = 0
    let diamonds = 0

    for (let i=0;i<5;i++){
        if (suitList[i] === "spades"){
            spades += 1
        } 
        else if (suitList[i] === "hearts"){
            hearts += 1
        }
        else if (suitList[i] === "clubs"){
            clubs += 1
        } else {
            diamonds += 1
        }
    }
    
    if (pairList.length === 0 && (valueList[0]+4 === valueList[4] || (valueList[0] === 1 && valueList[1] === 10 ))){
        if (spades === 5 || hearts === 5 || clubs === 5 || diamonds === 5){
            setMessage("You won with a Straight Flush")
        } else{
            setMessage("You won with a Straight")
        }
    }
    
    else if (spades === 5 || hearts === 5 || clubs === 5 || diamonds === 5){
        setMessage("You win with a Flush")
    }    

    else if (pairList.length === 1 && (pairList[0] > 10 || pairList[0] === 1)){
        if (pairList[0] === 1){
            setMessage(`You Win with a pair of Aces`)
        }
        else if (pairList[0] === 11){
            setMessage(`You Win with a pair of Jacks`)
        }
        else if (pairList[0] === 12){
            setMessage(`You Win with a pair of Queens`)
        }
        else{ 
            setMessage(`You Win with a pair of Kings`)
        }        
    }

    else if (pairList.length > 1){
        pairList.sort((a,b)=> a-b)
        if (pairList.length === 3){
            if (pairList[0] !== pairList[1]){
                setMessage("You Won with a Full House")
            } else{
                setMessage("You won with a 4 of a Kind")
            }
        }
        else if (pairList[0] !== pairList[1]){
                setMessage("You won with a two pair")
        } else{
            setMessage("You won with a 3 of a Kind")
        }    
    }

    else{
        setMessage("SORRY... You LOST... Better luck next time!")
    }
 
    return(
        <>
        </>
    )
}

export default WinLose;