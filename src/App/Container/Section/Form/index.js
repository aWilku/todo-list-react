import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledFormButton } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedNewTaskContent = newTaskContent.trim();
        if (trimedNewTaskContent.length > 0) {
            addNewTask(trimedNewTaskContent);
        }
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <StyledFormButton onClick={focusInput}>
                Dodaj zadanie
            </StyledFormButton>
        </StyledForm>
    );
};

export default Form;