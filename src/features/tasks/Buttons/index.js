import { InteractiveButtons, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toogleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
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
                        onClick={() => dispatch(setAllDone())}
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