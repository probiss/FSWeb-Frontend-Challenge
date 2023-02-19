import React from "react";
import "../cards/project.css";

const Project = ({ image, title, description, list1, list2, list3, url1, url2 }) => {
    return (
            <div className="project">
                <img  className="project-img" src={image} alt={title} />
                <h2 className="project-title" >{title}</h2>
                <p className="project-description">{description}</p>
                <div className="project-list" >
                    <ul>
                        <li className="project-list-item" >{list1}</li>
                        <li className="project-list-item" >{list2}</li>
                        <li className="project-list-item" >{list3}</li>
                    </ul>
                </div>
                <div className="project-a">
                    <a className="text-indigo-800" href={url1}>Github</a>
                    <a className="text-indigo-800" href={url2}>View Site</a>
                </div>
            </div>
    );
}

export default Project;