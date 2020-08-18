import React from "react";
import styled from "styled-components";

const StyledMember = styled.div`
    margin: 1rem;
    padding: 1rem;
    width: 80%;

    border: 1px solid currentColor;
    border-radius: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button{
        color: ${props => props.theme.headingTextColor};
        background-color: ${props => props.theme.headingBackgroundColor};
        padding: 1rem;
        border: 1px solid currentColor;
        border-radius: 1rem;
    }

    &.active{
        color: ${props => props.theme.headingTextColor};
        background-color: ${props => props.theme.headingBackgroundColor};
        
        button{
            color: ${props => props.theme.highlightTextColor};
            background-color: ${props => props.theme.highlightBackgroundColor};
        }
    }
`;

const Member = (props) => {
    const {member, edit, isActive} = props;

    const editMe = () => {
        edit(member.id);
    }

    return(
        <StyledMember className={isActive ? "active" : ""}>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.email}</p>
            <button onClick={editMe}>edit me</button>
        </StyledMember>
    )
}

export default Member;