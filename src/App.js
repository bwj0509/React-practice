import "./App.css";
import styles from "./App.module.css";
import React from "react";
import Hello from "./component/Hello";
import Count from "./component/Count";

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Hello />
                <Hello />
                <Hello />
                <Count />
            </div>
        );
    }
}

export default App;