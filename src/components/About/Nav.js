import React from "react";
import {BsArrowUpCircleFill, BsBriefcaseFill,BsFillEnvelopeFill} from 'react-icons/bs'
import {AiFillBook} from 'react-icons/ai'

function Nav(){


    return(
        <nav className="about_us_menu">
           <ul>
               <li><a href="#info__"><BsArrowUpCircleFill/></a></li>
               <li><a href="#knowledge__"><AiFillBook/></a></li>
               <li><a><BsBriefcaseFill/></a></li>
               <li><a href="#form"><BsFillEnvelopeFill/></a></li>
           </ul>
        </nav>
    )
}
export default Nav