import Score from "./components/components/Score";
import Triangle from "./components/Triangle";
import Result from "./components/components/Result";
import { useState } from "react";

function App(){
    const [render,setRender] = useState('triangle');
    const [choice,setChoice] = useState('paper');

    function handleClick(e){
        console.log(e.target.id)
        setChoice(e.target.id)
        setRender('change')
    }
    return <div className="container">
        <div className="header">
            <div className="header__text">
                <h1 className="header__text--h1">rock paper scissors</h1>
            </div>
            
            <Score/>
        </div>
        {render==='triangle'?<Triangle onClick={handleClick}/>:<Result choice={choice}/>}
        
    </div>
}

export default App;