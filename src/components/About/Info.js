import React from "react";
import {BsDot} from 'react-icons/bs'

const style = { color: "rgb(208, 71, 226)", fontSize: "1.5rem" }

function Info(){

    return(
        <article className="info" >
            <h2>About me😊</h2>
            <p>Currently studying Systems Engineering at the National University of Costa Rica, since 2019.<br></br>
            Studying independently web development since August of 2021.</p>
            <h3>Some of my soft skills include: </h3>
            <ul className="info_list">
                <li><span><BsDot style={style}/></span>Adaptability</li>
                <li><span><BsDot style={style}/></span>Fast learner</li>
                <li><span><BsDot style={style}/></span>Critical thinking</li>
                <li><span><BsDot style={style}/></span>Logical thinking and problem solving</li>
                <li><span><BsDot style={style}/></span>Accepting feedback</li>
                <li><span><BsDot style={style}/></span>Collaboration and teamwork</li>
                <li><span><BsDot style={style}/></span>Work well under pressure</li>
                <li><span><BsDot style={style}/></span>Attention to detail</li>
            </ul>
        </article>
    )
}
export default Info