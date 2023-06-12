import Score from "./components/components/Score";
import Triangle from "./components/Triangle";
import Result from "./components/components/Result";
import { useState } from "react";

function App(){
    const [render,setRender] = useState(true);
    const [choice,setChoice] = useState('paper');
    const [score,setScore] = useState(12)

    function handleClick(e){
        setChoice(e.target.id)
        setRender((prevValue)=>{
            return !prevValue;
        })
    }
    function changeScore(typeOfChange){
        if(typeOfChange === 'increment'){
            setScore((prevScore)=>{
                return prevScore += 1
            })
        }
        else if(typeOfChange === 'decrement'){
            setScore((prevScore)=>{
                return prevScore -= 1
            })
        }
    }
    return <div className="container">
        <div className="header">
            <div className="header__text">
                <h1 className="header__text--h1">rock paper scissors</h1>
            </div>
            
            <Score score={score}/>
        </div>
        {render?<Triangle onClick={handleClick}/>:<Result onClick={handleClick} changeScore={changeScore} choice={choice}/>}
        
    </div>
}

export default App;