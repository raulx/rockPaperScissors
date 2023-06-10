import React from "react";
import '../../css/sass/abstracts/_variables.scss'

function Hand({imgSource,onClick,id ,style}){
    return <div className="hand" style={style}>
        <div className="hand__box" >
            <img className="hand__box__icon" id={id} onClick={onClick} src={imgSource} alt="icon-img"></img>
        </div>
        
    </div>
}

export default Hand;