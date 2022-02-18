import { useState } from "react";


const Hello = (props) => {
    
    const [name, setName] = useState('Mike');
    const msg = props.age >19 ? "성인 입니다.":"미성년자 입니다.";

    function changeName(){
        setName(name === "Mike"? "Jane":"Mike");
    }

    return(
        <div>
            <h2 id='name'>{name}({props.age}) : {msg},{props.price}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    )

};

export default Hello;