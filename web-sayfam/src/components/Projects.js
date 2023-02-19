import React from "react";
import Project from "../cards/Project";
import "../Styles/Projects.css";


const Projects = () => {
    return (
        <div>
            <div className="projects" id="projects">
                <h1 className="div-h1"> Projects </h1>
            </div>
            <div className="projects-container" >
                <Project
                    image={require("../images/proje_1.jpg")}
                    title="Wokintech"
                    description="A simple, customizable, minimal setup cookie 
                plugin that allows your users to select which 
                cookies to accept or decline. This was 
                created with vanilla JS, SCSS and Parcel 
                Bundler and is available as a NPM package 
                and the git repository makes any type of 
                customization to code and themes possible."
                    list1="react"
                    list2="redux"
                    list3="axios"
                    url1=""
                    url2=""
                />
                <Project
                    image={require("../images/proje_2.jpg")}
                    title="Random Jokes"
                    description="A simple, customizable, minimal setup cookie 
                plugin that allows your users to select which 
                cookies to accept or decline. This was 
                created with vanilla JS, SCSS and Parcel 
                Bundler and is available as a NPM package 
                and the git repository makes any type of 
                customization to code and themes possible."
                    list1="react"
                    list2="redux"
                    list3="axios"
                    url1=""
                    url2=""
                />
                <Project
                    image={require("../images/proje_3.jpg")}
                    title="Journey"
                    description="A simple, customizable, minimal setup cookie 
                plugin that allows your users to select which 
                cookies to accept or decline. This was 
                created with vanilla JS, SCSS and Parcel 
                Bundler and is available as a NPM package 
                and the git repository makes any type of 
                customization to code and themes possible."
                    list1="react"
                    list2="redux"
                    list3="axios"
                    url1=""
                    url2=""
                />
            </div>
        </div>
    );
};

export default Projects;