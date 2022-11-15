import "./style.css";

const Buttons = ({ tasks, hideDone, toogleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toogleHideDone}
                    className="buttons__button">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )};
    </div>
);

export default Buttons;