import React from "react";
import { useState } from "react";


function Score(){
    const [score,changeScore] = useState(12)
   
    return <div className="score">
        <p className="score__text">score</p>
        <span className="score__number">{score}</span>
    </div>
}

export default Score;