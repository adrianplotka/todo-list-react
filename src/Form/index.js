import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewcTaskContent = newTaskContent.trim();

        if(!trimmedNewcTaskContent) {
            return;
        };

        addNewTask(trimmedNewcTaskContent);
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input className=" form__text"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;