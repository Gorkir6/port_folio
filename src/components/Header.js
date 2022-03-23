import React from "react";
import Title from "./Title";
import {Link} from 'wouter';

const links = [
    {
        'name': 'Home',
        'id': '/',
        'num': '1'
    },
    {
        'name': 'Work',
        'id': '#work',
        'num': '2'
    },
    {
        'name': 'About',
        'id': '/about',
        'num': '3'
    }
]

function Header(params){
    return(
        <nav className="header">
            <Title></Title>
            <ul>
                {links.map(menu_name => menu_name.id !== '#work' ? <Link  key={menu_name.num} to={menu_name.id}><li>{menu_name.name}</li></Link> :<li><a key={menu_name.num} href={menu_name.id}>{menu_name.name}</a></li>
                )}
            </ul>
        </nav>
    )
}
export default Header