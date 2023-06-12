import React from "react";


function Score({score}){
    return <div className="score">
        <p className="score__text">score</p>
        <span className="score__number">{score}</span>
    </div>
}

export default Score;