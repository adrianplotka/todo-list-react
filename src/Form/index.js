import { useState, useRef } from "react";
import { StyledForm, StyledInput, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewcTaskContent = newTaskContent.trim();

        if(!trimmedNewcTaskContent) {
            return;
        };

        addNewTask(trimmedNewcTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
            />
            <Button className="form__button">Dodaj zadanie</Button>
        </StyledForm>
    );
}

export default Form;