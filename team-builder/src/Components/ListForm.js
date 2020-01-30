import React, { useState } from "react";

const ListForm = props => {
    const [list, setlist] = useState({
        id: '',
        member_name: "",
    });

    const handleChanges = e =>{
        setlist({...list, [e.target.member_name]: e.target.value });
        console.log(list);
    };

    const subitForm = e =>{
        e.preventDefault();
        props.addMember(list);
        setlist({id: "", member_name: ""});
    };

    return (
        <form onSubmit={subitForm}>
            <label htmlFor='id'>Member ID</label>
            <input
                id='title'
                type='text'
                name='title'
                onChange={handleChanges}
                placeholder='member'
                value={list.id}
            />
            <label htmlFor='member'></label>
            <textarea
                id='member'
                name='body'
                onChange={handleChanges}
                value={list.member_name}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default ListForm;