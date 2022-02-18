import styles from "./Hello.module.css";
import { useState } from "react";


const Hello = () => {

    const [name, setName] = useState('Mike');

    function changeName(){
        setName(name === "Mike"? "Jane":"Mike");
    }

    return(
        <div>
            <h2 id='name'>{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    )

};

export default Hello;