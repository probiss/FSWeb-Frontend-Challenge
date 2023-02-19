import React from "react";
import Able from "../cards/Able";
import "../Styles/Skills.css";

export default function Skills() {
    return (
        <div>
            <div className="skills">
                <h1 className="div-h1"> Skills </h1>
            </div>
            <div className="skills-container">
                <Able
                    title="Java Script"
                    body="JavaScript eğitimi süresince 
                    verilen gün sonu projeleri ile kendimi geliştirmeye çalıştım ve 
                    çalışıyorum.Kariyer olarak güzel yerlerde olmak istiyorum."
                />
                <Able
                    title="React.Js"
                    body="React.Js eğitimi süresince 
                    verilen gün sonu projeleri ile kendimi geliştirmeye çalıştım ve 
                    çalışıyorum.Kariyer olarak güzel yerlerde olmak istiyorum."
                />
                <Able
                    title="Node.Js"
                    body="Node.Js eğitimi süresince 
                    verilen gün sonu projeleri ile kendimi geliştirmeye çalıştım ve 
                    çalışıyorum.Kariyer olarak güzel yerlerde olmak istiyorum."
                />
                <div className="skills-cizgi"></div>
            </div>
        </div>
    )
}