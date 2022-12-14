import { InteractiveButtons, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toogleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <InteractiveButtons>
            {tasks.length > 0 && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toogleHideDone())}
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
}

export default Buttons;