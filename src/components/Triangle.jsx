import React from "react";
import Hand from "./components/Hand";
import bgTriangle from '../images/bg-triangle.svg';
import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissor from '../images/icon-scissors.svg';




function Triangle({onClick}){
    return <div className="triangle" style={{backgroundImage:`url(${bgTriangle})`}}>
            <Hand id='paper' onClick={onClick} imgSource={Paper}/>
            <Hand id='scissors' onClick={onClick} imgSource={Scissor}/>
            <Hand id='rock' onClick={onClick} imgSource={Rock}/>

    </div>
}

export default Triangle;