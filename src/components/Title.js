import React from "react";
import {Link} from 'wouter';
import Gorki from '../assests/images/gorki.webp'
function Title(){
    return(
        <h1 className="title"><Link  to='/'>GorkiCR <span className="happy">🙂</span> <span className="demon">👺</span></Link></h1>
    )
}

export default Title