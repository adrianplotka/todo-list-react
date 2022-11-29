import { InteractiveButtons, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAllDone }) => (
    <InteractiveButtons>
        {tasks.length > 0 && (
            <>
                <StyledButton
                    onClick={toogleHideDone}
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
    </InteractiveButtons>
);

export default Buttons;