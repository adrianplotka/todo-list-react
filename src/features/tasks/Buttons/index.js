import { InteractiveButtons, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toogleHideDone, setAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {
   const areTasksEmpty = useSelector(selectAreTasksEmpty);
   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <InteractiveButtons>
            {!areTasksEmpty && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toogleHideDone())}
                    >
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </InteractiveButtons>
    );
}

export default Buttons;