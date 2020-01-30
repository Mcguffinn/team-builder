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
                name='id'
                onChange={handleChanges}
                placeholder='Member ID'
                value={list.id}
            />
            <label htmlFor='member'></label>
            <textarea
                id='member'
                name='member_name'
                onChange={handleChanges}
                placeholder="Member Name"
                value={list.member_name}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default ListForm;