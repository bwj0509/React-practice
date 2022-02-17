import "./App.css";
import styles from "./App.module.css";
import React from "react";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Hello />
            </div>
        );
    }
}

export default App;