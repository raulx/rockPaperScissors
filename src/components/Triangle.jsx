import React from "react";
import Hand from "./components/Hand";
import bgTriangle from '../images/bg-pentagon.svg'


function Triangle(){
    return <div className="triangle" style={{backgroundImage:`url(${bgTriangle})`}}>
        <Hand/>
    </div>
}

export default Triangle;