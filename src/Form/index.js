import { useState } from "react";
import { StyledForm, Text, Button } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <Text
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
            />
            <Button className="form__button">Dodaj zadanie</Button>
        </StyledForm>
    );
}

export default Form;