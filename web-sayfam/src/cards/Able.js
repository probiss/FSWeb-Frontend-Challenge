import React from 'react';
import "../cards/able.css";

const Skill = ({ title, body }) => {
    return (
        <div className="able">
            <h2 className="h2-able" >{title}</h2>
            <p className='p-able' >{body}</p>
        </div>
    );
};

export default Skill;