import React from "react";



function Socials(params){
    return(
        <div className="socials">
            <a href={params.link}>{params.icon}</a>
            
        </div>
    )
}
export default Socials