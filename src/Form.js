import React from "react";

const Form = (props) => {
    const {values, setValue, submitForm} = props;

    const setValueListener = event => {
        setValue(event.target.name, event.target.value);
    };

    const canSubmitNow = () => {
        return values.name.trim() && values.email.trim() && values.role;
    }

    return(
        <form onSubmit={submitForm}>
            <h3>Add new team member</h3>
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
            <button disabled={!canSubmitNow()}>Do the Thing</button>
        </form>
    );
}

export default Form;