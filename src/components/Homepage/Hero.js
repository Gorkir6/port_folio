import React from "react";
import Logo from "./logo";
function Hero(){
    return(
        <section className="hero" id="home">
            <div>
                <Logo></Logo>
            </div>
            <div className="hero_content">
            <h2>Hello!</h2>
            <p>I'm Gorki, a system engineer student from the UNA</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque facere nobis vitae autem, cum ipsum iste delectus beatae? Quis </p>
            </div>
        </section>
    )
}

export default Hero