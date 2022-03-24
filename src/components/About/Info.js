import React from "react";
import {BsDot} from 'react-icons/bs'

const style = { color: "rgb(208, 71, 226)", fontSize: "1.5rem" }

function Info(){

    return(
        <article className="info">
            <h2>I'm Gorki,<br/> a frontend developer 😊</h2>
            <p>I'm currently studying system engineering in the UNA(Universidad Nacional de Costa Rica) </p>
            <p>I've been learning about web development since August of 2021</p>
            <ul className="info_list">
                <li><span><BsDot style={style}/></span>I like to learn about new tecnologies</li>
                <li><span><BsDot style={style}/></span>Teamwork</li>
                <li><span><BsDot style={style}/></span>Attention to detail</li>
                <li><span><BsDot style={style}/></span>Good adaptability</li>
                
            </ul>
        </article>
    )
}
export default Info