import React from 'react';
import "../cards/project.css";

const Project({ image, title, description }) => {
    return (
        <div>
            <img src="" alt="" >{image}</img>
            <h2>{title}</h2>
            <p>{description}</p>
    )
}

export default Project;