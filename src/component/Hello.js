import World from "./World";
import styles from "./Hello.module.css";


function showName(){
    console.log("Mike");
}

function showAge(age){
    console.log(age);
}

function showText(txt){
    console.log(txt)
}


const Hello = () => {
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>show name</button>
            <button onClick={()=>{
                showAge(10);
            }}>show age</button>
            <input type="text" onChange={(e)=>{
                const txt = e.target.value;
                showText(txt);
            }}></input>
        </div>

    )

};

export default Hello;