import React from "react";
import Hand from "./Hand";
import Rock from '../../images/icon-rock.svg';
import Paper from '../../images/icon-paper.svg';
import Scissor from '../../images/icon-scissors.svg';


function Result({choice}){
    let c = choice
    let img = Paper;
    let style = {background:'linear-gradient(to right,hsl(230,89%,62%),hsl(230,89%,65%))'}
    console.log(img)
    if(c === 'rock'){
        style.background = 'linear-gradient(to right,hsl(349,71%,52%),hsl(349,70%,56%))';
        img = Rock
    }
    else if(c === 'scissors'){
        style.background = 'linear-gradient(to right,hsl(39, 89%, 49%) ,hsl(40, 84%, 53%))';
        img = Scissor
    }
    return <div>
        <Hand imgSource={img} style={style}/>
    </div>
}



export default Result;