import { StyledButtonContainer, StyledButton } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtonContainer>
        {tasks.length > 0 && (
            <>
                <StyledButton
                    onClick={toggleHideDone}
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </StyledButton>
                <StyledButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )}
    </StyledButtonContainer>
);

export default Buttons;