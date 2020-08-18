import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    margin: 1rem;
    padding: 1rem 1rem 1rem 2rem;
    width: 80%;

    border: 2px solid currentColor;
    border-radius: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    input{
        color: currentColor;
        background-color: transparent;
        font-size: 1.2rem;
        border: 0;
        padding-top: 4px;
        padding-bottom: 2px;
        border-bottom: 1px solid currentColor;
    }

    select{
        color: currentColor;
        background-color: transparent;
        font-size: 1.2rem;
        border: 0;
    }

    select option{
        color: initial;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    button{
        color: ${props => props.theme.headingTextColor};
        background-color: ${props => props.theme.headingBackgroundColor};
        padding: 1rem;
        border: 2px solid currentColor;
        border-radius: 1rem;
        margin-top: 1rem;
    }

    button:first-of-type{
        margin-top: 0rem;
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

const Form = (props) => {
    const {values, setValue, submitForm, cancelForm} = props;

    const setValueListener = event => {
        setValue(event.target.name, event.target.value);
    };

    const doCancel = event => {
        event.preventDefault();
        cancelForm();
    }

    const canSubmitNow = () => {
        return values.name.trim() && values.email.trim() && values.role;
    }

    return(
        <StyledForm onSubmit={submitForm} className={values.editExistingID ? "active" : ""}>
            <h3>{values.editExistingID ? "Edit team member" : "Add new team member"}</h3>
            <input name="name" type="text" placeholder="username" value={values.name} onChange={setValueListener} />
            <input name="email" type="email" placeholder="email" value={values.email} onChange={setValueListener} />
            <select name="role" value={values.role} onChange={setValueListener}>
                <option value = "">Select a role:</option>
                <option>UX Designer</option>
                <option>Frontend Dev</option>
                <option>Backend Dev</option>
                <option>QA Engineer</option>
                <option>Ninja</option>
            </select>
            <div>
                <button disabled={!canSubmitNow()}>{values.editExistingID ? "Edit Member" : "Add Member"}</button>
                {values.editExistingID !== 0 && <button onClick={doCancel}>Cancel Edit</button>}
            </div>
        </StyledForm>
    );
}

export default Form;