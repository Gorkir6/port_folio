import React from "react";
import Logo from "./logo";
function Hero(){
    return(
        <section className="hero" id="home">
            <div className="hero_img">
                <Logo></Logo>
            </div>
            <div className="hero_content">
            <h2>Hello!</h2>
            <p>I'm Gorki, a <br/>system engineer student from Costa Rica.</p>
            </div>
        </section>
    )
}

export default Hero