import React from "react";
import Socials from "./Social";
import {BsFacebook} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'

const style = { color: "rgb(208, 71, 226)", fontSize: "1.5em" }
const ic = [
    {
        'link': 'https://www.facebook.com/gorkiivan.romerovalerio/',
        'icon': <BsFacebook style={style}/>,
        'key': '1'
    },
    {
        'link': 'https://github.com/gorkir6',
        'icon': <AiFillGithub style={style}/>,
        'key': '2'
    },
    {
        'link': 'mailto:gorkir6@gmail.com',
        'icon': <SiGmail style={style}/>,
        'key': '3'
    }
]

function Footer(){
    return(
        <footer>
           {
               ic.map(each => <Socials link={each.link} icon={each.icon} key={each.key}></Socials>)
           }
        </footer>
    )
}

export default Footer