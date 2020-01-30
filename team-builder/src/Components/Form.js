import React from "react";

const Forms = props => {
    return (
        <div className='from-list'>
            <h2>{props.member_name}</h2>
            <h2>{props.id}</h2>
        </div>
    );
};

export default Forms;