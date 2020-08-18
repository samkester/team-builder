import React from "react";

const Member = (props) => {
    const {member, edit} = props;

    const editMe = () => {
        edit(member.id);
    }

    return(
        <div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.email}</p>
            <button onClick={editMe}>edit me</button>
        </div>
    )
}

export default Member;