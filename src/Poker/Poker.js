import React, {useState, useEffect} from "react";
import DealtHand from "./DealtHand";
import ChangeCards from "./ChangeCards";
import StartLayout from "./StartLayout"
import assignDeck from "../utils/assignDeck"
import SecondHand from "./SecondHand";
import WinLose from "./WinLose"

function Poker (){

    const [hands, setHands] = useState([]);
    const [deal, setDeal] = useState(0);
    const [gameNum, setGameNum] = useState(0);
    const [newHands, setNewHands] = useState([])
    const [restart, setRestart] = useState(0)
    const [message, setMessage] = useState("")
    
   
    const dealHandler = () =>{
        setDeal(deal+1)
        setGameNum((gameNum)=>gameNum+1);
    }
    const restartHandler = () =>{
        setDeal(false)
        setGameNum(0);
        setRestart(restart+1)
    }  

    useEffect(() => {
        async function loadCards () {
           // const cardList = await assignDeck(gameNum, hands);
            setHands(()=> assignDeck(gameNum, hands));
        }
        loadCards();
    },[restart])
    
    

    return(
        <body>
            <div>
                {gameNum === 0 ? 
                    <>    
                        <h1>Welcome and Good Luck!</h1> 
                        <h3>Please press DEAL to start Playing</h3>
                    </> : ""}
                {gameNum === 1  ?
                    <>    
                        <h1>Welcome and Good Luck!</h1> 
                        <h3>Please Select the card you want to keep and press DEAL to continue</h3>
                    </> : ""}
                    
                {gameNum === 3 ?    
                    <>
                        <h1>{message}</h1>
                        <h3>Please Press RESTART to play again!</h3>
                    </> : ""}

            </div>
            <div>
                {gameNum === 0 ? <StartLayout/ > : ""}    
                {gameNum === 1 ? <DealtHand hands={hands} /> : ""}
                {gameNum === 2 ? <ChangeCards hands={hands} setNewHands={setNewHands}/> : null }
                {gameNum === 3 ? <SecondHand newHands={newHands} />: ""}
                {gameNum === 3 ? <WinLose newHands={newHands} setMessage={setMessage} />: ""}
                {gameNum >3 ? <h1>Please press Restart to play again</h1> : "" }
            </div>
            <div>    
                <button className="btn btn-primary btn-lg" onClick={dealHandler} size={"lg"}>DEAL</button>
                <button className="btn btn-secondary btn-lg" onClick={restartHandler}>RESTART</button>
            </div>
            <div>
                <h3>------Rules------</h3>
                <p>A winning Hand consists of a pair of Jacks or Higher</p>
                <p>You can to change cards once</p>
            </div>
        </body>
    )
}
export default Poker;