import React from "react";

const Form = (props) => {
    const {} = props;

    return(
        <form>
            <input name="name" type="text" placeholder="username" />
            <input name="email" type="email" placeholder="email" />
            <select>
                <option value = "">Select a role:</option>
                <option>UX Designer</option>
                <option>Frontend Dev</option>
                <option>Backend Dev</option>
                <option>QA Engineer</option>
                <option>Ninja</option>
            </select>
        </form>
    );
}

export default Form;