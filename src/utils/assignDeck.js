import randomNumber from "../utils/randomNumber"
import data from "../Data/data"

function assignDeck(gameNum, hands){
    let cardList = {};
    let list = [];
   
    if (gameNum === 0){
        for (let i=0; i<5; i++){
            let num = randomNumber(1,52);
            while (list.includes(num)){
                num = randomNumber(1,52);
            }
            list.push(num);
        }
   
        list.forEach((num, index) => {
            const card = data.filter((card)=> card.id === Number(num));
           cardList[index] = card
        });   
    } else {
        cardList = hands
    }
    
    return cardList;
}

export default assignDeck;

