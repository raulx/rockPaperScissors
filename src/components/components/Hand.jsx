import React from "react";

function Hand({imgSource}){
    return <div className="hand">
        <img className="hand__icon" src={imgSource} alt="icon-img"></img>
    </div>
}

export default Hand;