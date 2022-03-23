import React from "react";

function Knowledge({tec, level,icon}){
    return(
        <article className="know_card">
            <h2>{tec}</h2>
                <div className="know_icon">{icon}</div>
            <small>{level}</small>
        </article>
    )
}
export default Knowledge