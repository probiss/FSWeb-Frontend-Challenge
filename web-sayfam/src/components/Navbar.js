import React from "react";
import "../Styles/Navbar.css";

export default function Navbar() {
    return (
        <navbar>
            <div>
                <h1>C</h1>
            </div>
            <nav>
                <a className="a" href="#skills">Skills</a>
                <a className="a1" href="#projects">Projects</a>
                <a className="hire-me" href="#footer">Hire me</a>
            </nav>
        </navbar>
    );
}