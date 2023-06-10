import React, { useEffect, useState } from "react";
import Hand from "./Hand";
import Rock from '../../images/icon-rock.svg';
import Paper from '../../images/icon-paper.svg';
import Scissor from '../../images/icon-scissors.svg';


function Result({choice}){
    //this block creates a hand for playerChoice
    let playerChoice = choice
    //By default the selected image if of paper.
    let img = Paper;
    let style = {background:'linear-gradient(to right,hsl(230,89%,62%),hsl(230,89%,65%))'}

    if(playerChoice === 'rock'){
        style.background = 'linear-gradient(to right,hsl(349,71%,52%),hsl(349,70%,56%))';
        img = Rock
    }
    else if(playerChoice === 'scissors'){
        style.background = 'linear-gradient(to right,hsl(39, 89%, 49%) ,hsl(40, 84%, 53%))';
        img = Scissor
    }

    //this block created a hand for computer.

    const [compChoice,setCompChoice] = useState({})
    
    useEffect(()=>{
        setTimeout(()=>{
            randomCompChoice()
        },1000)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    function randomCompChoice(){
        const choices = ['rock','paper','scissors']
        const newChoice = choices[Math.floor(Math.random()*3)];
        let newImage = Paper
        let newBackground = {background:'linear-gradient(to right,hsl(230,89%,62%),hsl(230,89%,65%)'}

        if(newChoice === 'rock'){
            newImage=Rock;
            newBackground={background :'linear-gradient(to right,hsl(349,71%,52%),hsl(349,70%,56%))'}
        }
        else if(compChoice.computerChoice === 'scissors'){
            newImage = Scissor;
            newBackground={background :'linear-gradient(to right,hsl(39,89%,49%),hsl(40,84%,53%))'}
        }
        setCompChoice((prevValue)=>{
            return {
                ...prevValue,
                computerChoice:newChoice,
                img2:newImage,
                style2:newBackground
            }
        })
    }
   

   
    
    return <div className="result">
        <div className=" choice">
            <h2 className="choice--text">you picked</h2>
            <Hand imgSource={img} style={style}/>
        </div>
        <div className=" choice">
            {Object.keys(compChoice).length === 0 ? <p></p>:<h2 className="choice--text">the house picked</h2>} 
            {Object.keys(compChoice).length === 0 ? <h2 className="choice--text">Thinking...</h2>:<Hand imgSource={compChoice.img2} style={compChoice.style2}/>}
            
        </div>
    </div>
}



export default Result;