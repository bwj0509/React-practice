import { useState } from "react";

const Count = function(){
    const [number, setNumber] = useState(0)


    const onIncrease10 = function(){
        setNumber(number +10)
    }
    
    const onDecrease10 = function(){
        if(number >= 10){
            setNumber(number -10)
        }
        else{
            alert("숫자는 0이하로 갈 수 없습니다.")
        }
        
    }
    
    const onIncrease1 = function(){
        setNumber(number +1)
    }
    
    const onDecrease1 = function(){
        if(number>0){
            setNumber(number -1)
        }
        else{
            alert("숫자는 0이하로 갈 수 없습니다.")
        }
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease10}>+10</button>
            <button onClick={onDecrease10}>-10</button>
            <button onClick={onIncrease1}>+1</button>
            <button onClick={onDecrease1}>-1</button>
        </div>
    )
}

export default Count;