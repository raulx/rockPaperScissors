import Score from "./components/components/Score";
import Triangle from "./components/Triangle";
import Result from "./components/components/Result";
import Rules from './images/image-rules.svg'
import { useState } from "react";

function App(){
    const [render,setRender] = useState(true);
    const [choice,setChoice] = useState('paper');
    const [score,setScore] = useState(12);
    const [rules,showRules] = useState(false);

    function handleClick(e){
        setChoice(e.target.id)
        setRender((prevValue)=>{
            return !prevValue;
        })
    }
    function displayRules(){
        showRules((prevValue)=>{
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

        {rules?<div className="rules">
            <div className="rules__box">
                <h1 className="rules__box--text">Rules</h1>
                <img src={Rules} alt="rules__box--img"></img>
                <div className="rules__box--close" onClick={displayRules}>X</div>
            </div>
           
        </div>:null}
        <div className="header">
            <div className="header__text">
                <h1 className="header__text--h1">rock paper scissors</h1>
            </div>
            
            <Score score={score}/>
        </div>
        {render?<Triangle onClick={handleClick}/>:<Result onClick={handleClick} changeScore={changeScore} choice={choice}/>}
        <button className="btn--secondary" onClick={displayRules}>rules</button>
        
    </div>
}

export default App;