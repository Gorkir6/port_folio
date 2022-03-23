import React from "react";
import Form from "./Form";
import Knowledge from "./Knowledge";
import Info from "./Info";
import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {DiCss3,DiReact,DiPhp} from 'react-icons/di'

const knowledge_arr = [
    {
        'title': 'HTML',
        'icon': <AiFillHtml5/>,
        'level': 'Advance'
    },
    {
        'title': 'JAVASCRIPT',
        'icon': <SiJavascript/>,
        'level': 'Intermediate-Advanced'
    },
    {
        'title': 'CSS',
        'icon': <DiCss3/>,
        'level': 'Advance'
    },
    {
        'title': 'REACT',
        'icon': <DiReact/>,
        'level': 'Basic(this page)'
    },
    {
        'title': 'PHP',
        'icon': <DiPhp/>,
        'level': 'Intermediate'
    },
]

function About(){
    return(
        <section className="about_us">
        <article className="know_container">
       {
           knowledge_arr.map(tec => <Knowledge tec={tec.title} level ={tec.level} icon={tec.icon} />)
       }
       </article>
       <Info></Info>
        
        <Form></Form>
        </section>
    )
}

export default About