import React from "react";
import "../Styles/Header.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import image from "../images/seversin.jpg";

export default function Header() {
    return (
        <header>
            <div className="div1"  >
                <h4><hr /> Cihat Bulut </h4>
                <h2> Creative thinker <br /> Minimalism lover </h2>
                <div>
                    <p>
                        Hi, I'm Cihat. I'm front-end developer. If you are looking for a
                        Developer who to craft solid and scalable frontend products
                        with great user experiences. Let's shake hands with me.
                        
                        <div className="links">
                            <a className="a11" href="#footer"  > Hire me </a>
                            <a className="a22" href="https://github.com/probiss" > <FaGithub className="github" /> Github </a>
                            <a className="a33" href="https://www.linkedin.com/in/cihat-bulut-2b2167135/" > <FaLinkedinIn className="linkedin" /> Linkedin </a>
                        </div>
                    </p>
                </div>
            </div>
            <div className="div2" >
                <img src={image} alt="me"></img>
            </div>
        </header>
    )

}